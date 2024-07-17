import React, { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
