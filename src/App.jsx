import "./App.css";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyJournal from "./pages/MyJournal/MyJournal";
/* import MyProfile from "./pages/MyProfile"; */
import PageNotFound from "./pages/404";
import JournalContextProvider from "./contexts/JournalContext";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <JournalContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="journal" element={<MyJournal />} />
              {/*               <Route path="profile" element={<MyProfile />} /> */}
              <Route path="*" element={<PageNotFound />} replace />
            </Route>
          </Routes>
        </JournalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
