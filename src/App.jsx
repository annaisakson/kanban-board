import Board from "./components/Board";
import DoingPage from "./components/DoingPage";
import DonePage from "./components/DonePage";
import TodoPage from "./components/TodoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Board />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/doing" element={<DoingPage />} />
        <Route path="/done" element={<DonePage />} />
      </Routes>
    </Router>
  );
}

export default App;
