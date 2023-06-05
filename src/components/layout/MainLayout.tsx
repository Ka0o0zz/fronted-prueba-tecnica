import { Inter } from "next/font/google";
import { ReactNode } from "react";

interface PropsMainLayout {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const MainLayout = ({ children }: PropsMainLayout) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-10 ${inter.className}`}
    >
      {children}
    </main>
  );
};
