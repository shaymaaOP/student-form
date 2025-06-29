import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { StudentRegistrationForm } from "@/components/StudentRegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Student Registration</h1>
          <p className="text-lg text-muted-foreground">Complete your registration in 3 simple steps</p>
          
          {/* Admin Panel Link */}
          <div className="mt-4">
            <Link to="/admin">
              <Button variant="outline" size="sm">
                Admin Panel
              </Button>
            </Link>
          </div>
        </div>
        <StudentRegistrationForm />
      </div>
    </div>
  );
};

export default Index;