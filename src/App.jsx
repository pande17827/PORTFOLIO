import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"; // Shared Header
import HeroSection from "./components/herosection/HeroSection";
import InfoCards from "./components/cards/InfoCards";
import ProjectsPage from "./screens/project_screen/pages/ProjectsPage";
import AIPage from "./screens/detailsoftheprojec/pages/AIPage"
import ProjectDetailsPage from "./screens/project_screen/pages/ProjectDetailsPage";

function App() {
  return (
    <Router>
      <Header /> {/* Now rendered outside Routes, appears on all pages */}
      <Routes>
        {/* Home Page Layout */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              {/* <AIPage></AIPage> */}
              <InfoCards />
            </>
          }
        />
        
        {/* Projects Page - Fullscreen */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;