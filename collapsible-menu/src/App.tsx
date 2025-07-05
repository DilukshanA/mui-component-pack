import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MenuListDemo from "./components/MenuListDemo"
import AdminDashboard from './pages/admin-dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/menu-list-demo' element={<MenuListDemo />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App