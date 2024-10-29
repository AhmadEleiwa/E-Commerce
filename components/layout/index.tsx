import { ReactNode } from "react";
import Header from "../header";
import Footer from "../foorer";
import { LanguageProvider } from "@/hooks/Language/LangaugeProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
};
export default Layout;
