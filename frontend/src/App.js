import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Which food is better? </h1>
        <div className="direction">
          {loading ? (
            <h1>loading</h1>
          ) : (
            <Image url={data ? data[0].url : "hello"} />
          )}

          <div className="text">OR</div>
          {loading ? (
            <h1>loading</h1>
          ) : (
            <Image url={data ? data[1].url : "hello"} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
