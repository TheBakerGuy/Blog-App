import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Counter } from "./views/counter/Counter";
import NavBar from "./components/layout/NavBar/NavBar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import NewRecipe from "./views/NewRecipe/NewRecipe";
import Recipe from "./views/Recipe/Recipe";
import Register from "./views/Register/Register";
import Settings from "./views/Settings/Settings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipe/new" element={<NewRecipe />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
