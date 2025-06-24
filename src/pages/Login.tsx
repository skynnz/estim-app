import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader, Input, Button} from "@heroui/react";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    navigate('/main-menu');
  };

  return (
    
    <div className="flex min-h-screen items-center justify-center p-6 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">Login</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <Button color="success" type="submit" fullWidth>
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don't have an account? <Link to="/register" className="text-primary">Register</Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;