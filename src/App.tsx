import {Route, Routes} from "react-router";
import Weather from "./pages/Weather/Weather.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Weather />} />
        </Routes>
    )
}

export default App
