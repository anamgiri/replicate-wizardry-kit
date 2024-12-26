import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserProfile = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16">
          <AvatarFallback className="bg-gray-100 text-gray-400">PL</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">Python Learner</h2>
          <p className="text-gray-600">Level 2</p>
        </div>
      </div>
      <div className="flex justify-between text-center">
        <div>
          <p className="text-4xl font-bold text-primary">0</p>
          <p className="text-gray-600">Completed</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary">4</p>
          <p className="text-gray-600">Total Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;