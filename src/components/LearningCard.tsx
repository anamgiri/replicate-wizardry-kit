import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface LearningCardProps {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
  content?: string;
}

const LearningCard = ({ title, level, progress, content }: LearningCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
      <div 
        className="flex justify-between items-center mb-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-2">
          <Badge className={`${getLevelColor(level)} text-white`}>{level}</Badge>
          {content && (
            isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="text-gray-600">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-100" />
      </div>
      {isExpanded && content && (
        <div className="mt-4 text-left prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

export default LearningCard;