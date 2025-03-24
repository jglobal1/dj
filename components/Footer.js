import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@harmlos-techno.ch</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/daydance/rigi" className="text-gray-400 hover:text-white transition-colors">
                  Rigi
                </Link>
              </li>
              <li>
                <Link href="/daydance/pilatus" className="text-gray-400 hover:text-white transition-colors">
                  Pilatus
                </Link>
              </li>
              <li>
                <Link href="/daydance/klewen" className="text-gray-400 hover:text-white transition-colors">
                  Klewen
                </Link>
              </li>
              <li>
                <Link href="/daydance/sachseln" className="text-gray-400 hover:text-white transition-colors">
                  Sachseln
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/harmlos_techno" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/harmlos.techno" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Harmlos Techno. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 