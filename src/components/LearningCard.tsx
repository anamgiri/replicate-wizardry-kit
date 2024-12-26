import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface LearningCardProps {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
}

const LearningCard = ({ title, level, progress }: LearningCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <Badge className={`${getLevelColor(level)} text-white`}>{level}</Badge>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="text-gray-600">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-100" />
      </div>
    </div>
  );
};

export default LearningCard;