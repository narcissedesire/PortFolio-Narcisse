import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./Accueil";
import Detail from "./Detail";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mx-auto px-5 py-4 mt-24">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/:id" element={<Detail />} />
            </Routes>
          </div>
        </main>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
