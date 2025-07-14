
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Treble from './Components/Pages/Treble';
import Bass from './Components/Pages/Bass'
import Start from './Components/Pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Start />} />
        <Route path="bass" element={<Bass />} />
        <Route path="treble" element={<Treble />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
