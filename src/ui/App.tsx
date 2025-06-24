import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from "@heroui/react";

// Lazy load components
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));
const MainMenu = React.lazy(() => import('../pages/MainMenu'));
const Page1 = React.lazy(() => import('../pages/Page1'));
const Page2 = React.lazy(() => import('../pages/Page2'));

// Loading component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <Spinner size="lg" color="primary" />
  </div>
);


const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main-menu" element={<MainMenu />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
    </Suspense>
  );
};

export default App;