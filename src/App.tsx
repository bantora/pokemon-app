import { Outlet, useParams } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav-bar/Navbar';
import type { ReactElement } from 'react';


const App = (): ReactElement => {
  const { gen } = useParams();
  return (
    <div className="App">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App;