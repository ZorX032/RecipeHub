
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/LoginPage.tsx";





function App() {


  return (

      <div className="bg-gray-100 min-h-screen">

          <div className="container mx-auto p-4">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>

              </Routes>
          </div>
      </div>


  )
}

export default App;
