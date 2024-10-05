import './index.css';
import {Routes, Route } from "react-router-dom";
 

import SearchPnrPage from './pages/SearchPnrPage';
import TrainInfoPage from './pages/TrainInfoPage';
import SearchTrainPage from './pages/SearchTrainPage';
import PnrInfoPage from './pages/PnrInfoPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchRoutePage from './pages/SearchRoutePage';
import TrainRoutePage from './pages/TrainRoutePage';
import ErrorPage from './pages/ErrorPage';
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow mt-16">
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/searchtrain" element={<SearchTrainPage />} />
          <Route path="/searchtrain/train" element={<TrainInfoPage />} />

          <Route path="/searchPnr" element={<SearchPnrPage />} />
          <Route path="/searchPnr/pnr" element={<PnrInfoPage />} />

          <Route path="/searchroute" element={<SearchRoutePage />} />
          <Route path="/searchroute/route" element={<TrainRoutePage />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

 