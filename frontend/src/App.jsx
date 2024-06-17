import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SignupPage from "./pages/SignupPage";
import UnipalLandingPage from "./pages/UnipalLandingPage";
import Chat from "./pages/Chat";
import ProfilePage from "./pages/ProfilePage";
import UploadTranscripts from "./pages/UploadTranscripts";
import ProfReview from "./pages/ProfReview";
import ProfessorReviews from "./pages/ProfessorReviews";
import CalendarComponent from "./pages/CalendarComponent";


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
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UnipalLandingPage />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/UploadTranscripts" element={<UploadTranscripts />} />
      <Route path="/ProfReview" element={<ProfReview />} />
      <Route path="/professor-reviews" element={<ProfessorReviews />} />
      <Route path="/Calendar" element={<CalendarComponent />} />

    </Routes>
  );
}
export default App;
