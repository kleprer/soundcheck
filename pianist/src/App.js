
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Treble from './Components/Pages/Treble';
import Bass from './Components/Pages/Bass'
import Start from './Components/Pages/Start';
import PlayBass from './Components/Pages/PlayBass'
import PlayTreble from './Components/Pages/PlayTreble';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Start />} />
        <Route path="bass" element={<Bass />} />
        <Route path="treble" element={<Treble />} />
        <Route path="bass/rythm" element={<PlayBass />} />
        <Route path="bass/norythm" element={<PlayBass />} />
        <Route path="treble/rythm" element={<PlayTreble />} />
        <Route path="treble/norythm" element={<PlayTreble />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
