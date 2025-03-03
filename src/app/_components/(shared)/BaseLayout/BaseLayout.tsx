import { ReactNode } from "react";
import { TopBar, Footer } from "@/app/_components";

function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}

export default BaseLayout;
