import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/navigation/Navbar';
import { HomePage } from './page';
import { EnrollmentSection } from './components/sections/EnrollmentSection';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/enrollment" element={<EnrollmentSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
