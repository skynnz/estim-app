import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Button } from "@heroui/react";

const Page2: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">Page 2</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <p>This is the content for Page 2.</p>
          <Link to="/main-menu">
            <Button color="primary" fullWidth>
              Back to Main Menu
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Page2;