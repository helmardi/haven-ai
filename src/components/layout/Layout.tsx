import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CommandSearch from "@/components/CommandSearch";
import AIAssistantWidget from "@/components/AIAssistantWidget";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
      <AIAssistantWidget />
    </div>
  );
};

export default Layout;
