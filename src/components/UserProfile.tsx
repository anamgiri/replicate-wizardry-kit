import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

interface Profile {
  username: string;
  age: number | null;
  level: number;
  lessons_completed: number;
}

const UserProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("username, age, level, lessons_completed")
          .eq("id", user.id)
          .maybeSingle();

        if (error) {
          console.error("Error fetching profile:", error);
          toast({
            title: "Error",
            description: "Failed to load profile data",
            variant: "destructive",
          });
          return;
        }

        setProfile(data);
      } catch (error) {
        console.error("Error in profile fetch:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user, toast]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <p className="text-gray-500">No profile data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-16 h-16">
          <AvatarFallback className="bg-gray-100 text-gray-400">
            {profile.username?.slice(0, 2).toUpperCase() || "??"}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{profile.username || "User"}</h2>
          <p className="text-gray-600">Level {profile.level}</p>
          {profile.age && <p className="text-gray-600">Age: {profile.age}</p>}
        </div>
      </div>
      <div className="flex justify-between text-center">
        <div>
          <p className="text-4xl font-bold text-primary">{profile.lessons_completed}</p>
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