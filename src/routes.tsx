import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
// import Profile from './pages/Profile'
// import Delivery from './pages/Delivery'
// import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/profile/:id" element={<Profile />} /> */}
    {/* <Route path="/delivery" element={<Delivery />} /> */}
    {/* <Route path="/checkout" element={<Checkout />} /> */}
  </Routes>
)

export default Rotas
