import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Button } from "@heroui/react";


const MainMenu: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">Main Menu</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Link to="/page1">
            <Button color='primary' variant='solid'  fullWidth>
              Estimacion App
            </Button>
          </Link>
          <Link to="/page2">
            <Button color='danger' fullWidth>
              Notas
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainMenu;