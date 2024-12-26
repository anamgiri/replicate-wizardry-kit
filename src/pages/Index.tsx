import UserProfile from "@/components/UserProfile";
import LearningPath from "@/components/LearningPath";
import LearningCard from "@/components/LearningCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <UserProfile />
            <LearningPath />
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Available Lessons</h2>
            <div className="space-y-4">
              <LearningCard
                title="Introduction to Python Programming Basics"
                level="Beginner"
                progress={0}
              />
              <LearningCard
                title="Object-Oriented Programming in Python"
                level="Intermediate"
                progress={0}
              />
              <LearningCard
                title="Data Structures and Algorithms"
                level="Advanced"
                progress={0}
              />
              <LearningCard
                title="Practical Python Projects"
                level="Advanced"
                progress={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;