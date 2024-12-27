import { useState, useEffect } from "react";
import { SignInForm, SignUpForm } from "@/components/AuthForms";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to Python Learning</h1>
          <p className="mt-2 text-gray-600">Please sign in to continue learning</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={isSignIn ? "default" : "outline"}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </Button>
          <Button
            variant={!isSignIn ? "default" : "outline"}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </Button>
        </div>

        {isSignIn ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default Auth;