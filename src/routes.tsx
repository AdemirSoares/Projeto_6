import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Pagamento from './pages/Pagamento'
import Entrega from './pages/Entrega'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/entrega" element={<Entrega />} />
    <Route path="/pagamento" element={<Pagamento />} />
  </Routes>
)

export default Rotas
