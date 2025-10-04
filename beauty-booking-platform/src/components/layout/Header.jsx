import { Link } from 'react-router-dom'; // Import Link for client-side navigation
import { Sparkles } from 'lucide-react'; // Import a nice icon for the logo

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Sparkles />
          <span>GlamourBook</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-base-text hover:text-primary transition-colors">Home</Link>
          <Link to="/salons" className="text-base-text hover:text-primary transition-colors">Salons</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-base-text font-medium hover:text-primary transition-colors">Log In</Link>
          <Link to="/register" className="bg-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-primary-hover transition-all">
            Register
          </Link>
        </div>
        
        {/* Mobile Menu Button (we'll add functionality later) */}
        <div className="md:hidden">
          <button className="text-base-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;