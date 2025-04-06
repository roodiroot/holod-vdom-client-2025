import Absolute from "@/components/absolute/absolute";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='min-h-[320px]'>{children}</div>
      <Footer />
      <Absolute />
    </>
  );
};

export default Layout;
