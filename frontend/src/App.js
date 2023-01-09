//import logo from "./logo.svg";
import "./App.css";
//import Image from "./Image";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001/api/opening")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        console.log(result);
      });
  }, []);

  function handler() {
    fetch("http://localhost:3001/api/choosing")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        console.log(result);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Which food is better? </h1>
        <div className="direction">
          {loading ? (
            <h1>loading</h1>
          ) : (
            <div className="foodButton">
              <img className="round" src={data ? data[0].url : "hello"} />
              {console.log(data[0])}
              <button onClick={handler}>Yummy</button>
            </div>
          )}

          <div className="text">OR</div>
          {loading ? (
            <h1>loading</h1>
          ) : (
            <div className="foodButton">
              <img className="round" src={data ? data[1].url : "hello"} />
              <button>Yummy</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
//console.log(data[0]);

export default App;
