import PropTypes from "prop-types";
import Header from "../../pages/Header/Header.jsx";
import Footer from "../../pages/Footer/Footer.jsx";
import SocialList from "../SocialList.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full items-center min-h-screen justify-between">
      <SocialList />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
