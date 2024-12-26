import { Check, Circle } from "lucide-react";

interface PathItem {
  id: number;
  title: string;
  completed: boolean;
}

const LearningPath = () => {
  const pathItems: PathItem[] = [
    { id: 1, title: "Python Basics", completed: true },
    { id: 2, title: "Data Types & Variables", completed: true },
    { id: 3, title: "Control Flow", completed: false },
    { id: 4, title: "Functions", completed: false },
    { id: 5, title: "Object-Oriented Programming", completed: false },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">Learning Path</h2>
      <div className="space-y-4">
        {pathItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            {item.completed ? (
              <div className="bg-primary text-white rounded-full p-1">
                <Check className="w-5 h-5" />
              </div>
            ) : (
              <div className="bg-gray-100 rounded-full p-1 text-gray-400">
                <Circle className="w-5 h-5" />
              </div>
            )}
            <span className={`${item.completed ? "text-primary font-medium" : "text-gray-600"}`}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;