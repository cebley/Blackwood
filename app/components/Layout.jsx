import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main className="pb-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
