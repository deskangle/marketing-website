import { ReactNode } from "react";
import { TopBar, Footer, ContactCTA } from "@/app/_components";

function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <TopBar />
      {children}
      {/* <ContactCTA /> */}
      <Footer />
    </div>
  );
}

export default BaseLayout;
