import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import About from "./pages/AboutPage/About.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import "./assets/style/main.css";

function App() {
  return (
    <>
      <div className="w-full flex bg-background min-h-screen flex-col items-center">
        <Layout>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/projects" element={<Projects />} />
            <Route index path="/about" element={<About />} />
            <Route index path="/contacts" element={<Contacts />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
