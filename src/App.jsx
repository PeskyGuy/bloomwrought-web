import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lore from './pages/Lore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lore" element={<Lore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
