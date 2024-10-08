import PropTypes from "prop-types";
import Header from "../../pages/Header/Header.jsx";
import Footer from "../../pages/Footer/Footer.jsx";
import SocialList from "../SocialList.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full items-center min-h-screen justify-between">
      <SocialList />
      <div className="max-[802px]:px-4 px-14 w-full max-w-[1180px]">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
