import { Home, Infinity, TrendingUp, Sigma } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CalcFrenzy
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={<Home className="w-4 h-4" />} text="Home" to="/" />
            <NavLink icon={<Infinity className="w-4 h-4" />} text="Limits" to="/limits" />
            <NavLink icon={<TrendingUp className="w-4 h-4" />} text="Derivatives" to="/derivatives" />
            <NavLink icon={<Sigma className="w-4 h-4" />} text="Integration" to="/integration" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text, to }: { icon: React.ReactNode; text: string; to: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;