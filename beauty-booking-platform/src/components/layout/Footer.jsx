import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-divider mt-auto">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-secondary-text text-sm">&copy; {new Date().getFullYear()} GlamourBook. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/about" className="text-sm text-secondary-text hover:text-primary">About Us</Link>
          <Link to="/contact" className="text-sm text-secondary-text hover:text-primary">Contact</Link>
          <Link to="/privacy" className="text-sm text-secondary-text hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;