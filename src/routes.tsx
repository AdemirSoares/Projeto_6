import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/delivery" element={<Delivery />} />
    <Route path="/payment" element={<Payment />} />
  </Routes>
)

export default Rotas
