import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NoMatch from "./views/NoMatch";
import HomeView from "./views/HomePage";
import InfoView from "./views/HelpPage"
import SingleplayerView from "./views/SingleplayerGamePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App-header">
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route path="/game" element={<SingleplayerView />} />
            <Route path="/help" element={<InfoView />} />

            <Route path='*' element={<NoMatch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
