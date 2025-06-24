import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader, Input, Button } from "@heroui/react";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    navigate('/main-menu');
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">Register</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              required
            />
            <Button color="primary" type="submit" fullWidth>
              Register
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account? <Link to="/" className="text-primary">Login</Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;