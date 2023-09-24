import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Read from './components/Read';
import Listen from './components/Listen';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter basename="https://holy-quran-1.vercel.app">
      <Routes>
        <Route path='/read' element={<Read />} />
        <Route path='/listen' element={<Listen />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
