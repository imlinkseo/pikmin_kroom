import { Routes, Route } from "react-router-dom";
import Header from "@components/ui/header/Header";
import Footer from "@components/ui/footer/Footer";
import MainPage from "@pages/MainPage";

export default function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
}
