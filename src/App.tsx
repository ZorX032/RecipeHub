
import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Login from "./pages/LoginPage.tsx";
import Navbar from "./components/Navbar.tsx";
import UserDetailsPage from "./pages/UserDetailsPage.tsx";
import UsersListPage from "./pages/UsersListPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RecipesListPage from "./pages/RecipesListPage.tsx";
import RecipeDetailsPage from "./pages/RecipeDetailsPage.tsx";





function App() {


  return (

      <div className="bg-gray-100 min-h-screen">
          <Navbar/>
          <div className="container mx-auto p-4">
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/users/:id" element={<UserDetailsPage />} />
                  <Route path="/users" element={<UsersListPage />} />
                  <Route path="/recipes" element={<RecipesListPage/>} />
                  <Route path="/recipes/:id" element={<RecipeDetailsPage/>} />
                  <Route path="*" element={<NotFoundPage />} />
              </Routes>
          </div>
      </div>


  )
}

export default App;
