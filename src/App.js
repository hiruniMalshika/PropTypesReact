import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./components/UserProfile";
import DataFetcher from "../src/DataFetcher";
import Greetings from "./components/Greetings";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserProfile name="Hiruni" age="34" />
      <DataFetcher />
      <Greetings isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "log in"}
      </button>
    </div>
  );
}

export default App;
