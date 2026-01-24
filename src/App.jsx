import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lore from './pages/Lore';
import GrimoireLayout from './pages/grimoire/GrimoireLayout';
import GrimoireOverview from './pages/grimoire/Overview';
import Combat from './pages/grimoire/Combat';
import Actions from './pages/grimoire/Actions';
import Equipment from './pages/grimoire/Equipment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lore" element={<Lore />} />
          <Route path="grimoire" element={<GrimoireLayout />}>
            <Route index element={<GrimoireOverview />} />
            <Route path="combat" element={<Combat />} />
            <Route path="actions" element={<Actions />} />
            <Route path="equipment" element={<Equipment />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
