import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import ClimateForecasts from "./prueba2.tsx";
import MapaDashboard from "./mapa.tsx";

const root = document.getElementById("root");

if (!root) {
    throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route
                path="/app1"
                element={<ClimateForecasts></ClimateForecasts>}
            />
            <Route path="/app2" element={<MapaDashboard />} />
        </Routes>
    </BrowserRouter>
);
