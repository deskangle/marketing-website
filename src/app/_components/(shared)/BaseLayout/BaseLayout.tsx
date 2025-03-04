import { ReactNode } from "react";
import { TopBar, Footer, ScrollTop } from "@/app/_components";

function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <TopBar />
      {children}
      <Footer />

      <ScrollTop />
    </div>
  );
}

export default BaseLayout;
