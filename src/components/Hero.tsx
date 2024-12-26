import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-32 pb-16 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
        CalcFrenzy: Interactive Calculus Learning Platform
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Master calculus through interactive visualizations, step-by-step solutions, and
        hands-on practice. Our platform makes learning calculus intuitive and engaging.
      </p>
      <Link
        to="/start"
        className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-full 
                 hover:bg-secondary transition-colors duration-300 animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        <span>Start Learning</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default Hero;