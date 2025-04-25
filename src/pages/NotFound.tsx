import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center section-container">
      <div className="text-center">
        <div className="inline-block bg-secondary/50 px-4 py-1.5 rounded-full mb-6">
          <span className="text-sm font-medium text-muted-foreground">404</span>
        </div>
        
        <h1 className="heading-xl mb-4">
          Page Not Found
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button 
          className="bg-tertiary hover:bg-tertiary/90"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
