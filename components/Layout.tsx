import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 ">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
