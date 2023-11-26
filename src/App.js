import Home from './pages/Home'
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OnBoardingFarmers from "./pages/OnBoardingFarmers";
import OnBoardingFarmersTwo from "./pages/OnBoardingFarmersTwo";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/onboarding" element={<Onboarding/>}/>
                <Route path="/onboardingfarmers" element={<OnBoardingFarmers/>}/>
                <Route path="/onboardingfarmerstwo" element={<OnBoardingFarmersTwo/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
