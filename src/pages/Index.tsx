import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { LineChart, Calculator, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<LineChart className="w-6 h-6 text-primary" />}
              title="Interactive Visualizations"
              description="See mathematical concepts come to life with dynamic graphs and animations."
              className="md:transform md:hover:-translate-y-1 transition-transform duration-300"
            />
            <FeatureCard
              icon={<Calculator className="w-6 h-6 text-primary" />}
              title="Step-by-Step Solutions"
              description="Learn at your own pace with detailed explanations for every problem."
              className="md:transform md:hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: "0.1s" }}
            />
            <FeatureCard
              icon={<BookOpen className="w-6 h-6 text-primary" />}
              title="Practice Problems"
              description="Reinforce your understanding with carefully curated practice problems."
              className="md:transform md:hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;