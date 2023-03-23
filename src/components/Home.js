import React, { useState } from "react";
import Nav from "./Nav";
import Portfolio from "./pages/Portfolio";
import Main from "./pages/Main";
import projects from "../projects";
import Contact from "./pages/contactInfo";
import Footer from "./Footer";
import Resume from "./pages/Resume";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Main />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio projects={projects} />;
    }
    if (currentPage === "Contact Info") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
