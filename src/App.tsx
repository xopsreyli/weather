import {Route, Routes} from "react-router";
import Weather from "./pages/Weather/Weather.tsx";
import ThemeProvider from "./contexts/Theme/ThemeProvider.tsx";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Weather />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
