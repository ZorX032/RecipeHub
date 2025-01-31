
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/LoginPage.tsx";
import Navbar from "./components/Navbar.tsx";
import UserDetails from "./pages/UserDetails.tsx";
import UsersListPage from "./pages/UsersListPage.tsx";
import NotFound from "./pages/NotFound.tsx";





function App() {


  return (

      <div className="bg-gray-100 min-h-screen">
          <Navbar/>
          <div className="container mx-auto p-4">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/users/:id" element={<UserDetails />} />
                  <Route path="/users" element={<UsersListPage />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
      </div>


  )
}

export default App;
