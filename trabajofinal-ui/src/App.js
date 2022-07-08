import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Game1P from "./views/Game";
import Help from "./views/HelpPage";
import Home from "./views/Home";

const NoMatch = () => <div className="no-match">NoMatch</div>

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App-header">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/game" element={<Game1P />} />
            <Route path="/help" element={<Help />} />

            <Route path='*' element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
