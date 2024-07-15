import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RecommendationsAxo from "./pages/RecommendationsAxo";
import AxoLandingPage from "./pages/AxoLandingPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/axo-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<RecommendationsAxo />} />
      <Route path="/axo-landing-page" element={<AxoLandingPage />} />
      <Route path="/landing-page-2" element={<LandingPage />} />
    </Routes>
  );
}
export default App;
