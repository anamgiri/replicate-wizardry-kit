import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface LearningCardProps {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
  content?: string;
  questions?: Question[];
}

const LearningCard = ({ title, level, progress, content, questions }: LearningCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const { toast } = useToast();

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

  const handleAnswerSubmit = () => {
    if (!questions) return;
    
    const currentAnswer = selectedAnswers[currentQuestion];
    const isCorrect = currentAnswer === questions[currentQuestion].correctAnswer;
    
    toast({
      title: isCorrect ? "Correct!" : "Incorrect",
      description: isCorrect 
        ? "Great job! Let's move to the next question." 
        : "Try again!",
      variant: isCorrect ? "default" : "destructive",
    });

    if (isCorrect && currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
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
      {isExpanded && (
        <>
          {content && (
            <div className="mt-4 text-left prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
          {questions && questions.length > 0 && (
            <div className="mt-4">
              <Button
                onClick={() => setShowQuiz(!showQuiz)}
                variant="outline"
                className="w-full"
              >
                {showQuiz ? "Hide Quiz" : "Take Quiz"}
              </Button>
              {showQuiz && (
                <div className="mt-4 p-4 border rounded-lg">
                  <h4 className="font-semibold mb-4">
                    Question {currentQuestion + 1} of {questions.length}
                  </h4>
                  <p className="mb-4">{questions[currentQuestion].question}</p>
                  <RadioGroup
                    value={selectedAnswers[currentQuestion]?.toString()}
                    onValueChange={(value) => {
                      const newAnswers = [...selectedAnswers];
                      newAnswers[currentQuestion] = parseInt(value);
                      setSelectedAnswers(newAnswers);
                    }}
                    className="space-y-2"
                  >
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={index.toString()} id={`q${currentQuestion}-o${index}`} />
                        <label htmlFor={`q${currentQuestion}-o${index}`}>{option}</label>
                      </div>
                    ))}
                  </RadioGroup>
                  <Button
                    onClick={handleAnswerSubmit}
                    className="mt-4"
                    disabled={selectedAnswers[currentQuestion] === undefined}
                  >
                    Submit Answer
                  </Button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LearningCard;