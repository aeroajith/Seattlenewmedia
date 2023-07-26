import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import DummyPage from "../Pages/DummyPage";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/home"  element={<Home/>}/>
            <Route path="/dashboard"  element={<Dashboard/>}/>
            <Route path="/dummyscreen"  element={<DummyPage/>}/>
           
        </Routes>
    )
}

export default AppRoutes