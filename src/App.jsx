import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Read from './components/Read';
import Listen from './components/Listen';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/read' element={<Read />} />
        <Route path='/listen' element={<Listen />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
