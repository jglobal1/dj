import { NextResponse } from 'next/server';

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

async function getSpotifyAccessToken() {
  try {
    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Token response not ok:', response.status, errorData);
      throw new Error(`Token request failed: ${response.status}`);
    }

    const data = await response.json();
    if (!data.access_token) {
      console.error('No access token in response:', data);
      throw new Error('No access token received');
    }
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const accessToken = await getSpotifyAccessToken();
    console.log('Successfully got access token');

    // Get new releases in Switzerland
    const newReleasesResponse = await fetch(
      `${SPOTIFY_API_URL}/browse/new-releases?country=CH&limit=20`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!newReleasesResponse.ok) {
      const errorData = await newReleasesResponse.text();
      console.error('New releases response not ok:', newReleasesResponse.status, errorData);
      throw new Error(`New releases request failed: ${newReleasesResponse.status}`);
    }

    const newReleasesData = await newReleasesResponse.json();
    console.log(`Found ${newReleasesData.albums?.items?.length || 0} new releases`);

    if (!newReleasesData.albums?.items?.length) {
      throw new Error('No new releases found');
    }

    // Get details for each album's first track
    const tracks = [];
    for (const album of newReleasesData.albums.items.slice(0, 10)) {
      try {
        const albumResponse = await fetch(
          `${SPOTIFY_API_URL}/albums/${album.id}/tracks?limit=1`,
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          }
        );
        
        if (albumResponse.ok) {
          const albumData = await albumResponse.json();
          if (albumData.items?.[0]) {
            const track = albumData.items[0];
            tracks.push({
              id: track.id,
              title: track.name,
              artist: album.artists.map(artist => artist.name).join(', '),
              albumArt: album.images[0]?.url || '',
              genre: 'New Release',
              popularity: 100, // New releases are trending by default
              previewUrl: track.preview_url,
              spotifyUrl: track.external_urls.spotify,
              releaseDate: album.release_date,
              albumName: album.name
            });
          }
        }
      } catch (error) {
        console.error('Error fetching album tracks:', error);
        // Continue with other albums if one fails
        continue;
      }
    }

    if (!tracks.length) {
      throw new Error('No tracks found in new releases');
    }

    console.log(`Successfully processed ${tracks.length} tracks`);
    return NextResponse.json({ 
      tracks,
      sectionTitle: 'New Releases in Switzerland',
      description: 'Latest tracks from Swiss charts'
    });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return NextResponse.json({ 
      tracks: [],
      error: error.message
    });
  }
} 