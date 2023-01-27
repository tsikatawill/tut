import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
