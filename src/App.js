import "./App.css";
// Switch is replaced with Routes && component with element
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
            </Routes>
        </Router>
    );
}

export default App;
