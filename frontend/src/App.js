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

  // function handle() {
  //   fetch("http://localhost:3001/api/testing", {
  //     method: "POST",
  //     //mode: "cors",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(dataJson),
  //   }).then((res) => {
  //     res.json();
  //     console.log(res);
  //   });
  // }
  function handleLeft(data) {
    return () => {
      console.log("hell no");

      fetch("http://localhost:3001/api/choosing/left", {
        method: "POST",
        //mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setLoading(false);
          console.log(result);
        });
    };
  }

  function handleRight(data) {
    return () => {
      console.log("hell no");

      fetch("http://localhost:3001/api/choosing/right", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setLoading(false);
          console.log(result);
        });
    };
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
              <button data={data} onClick={handleLeft(data)}>
                Yummy
              </button>
            </div>
          )}

          <div className="text">OR</div>
          {loading ? (
            <h1>loading</h1>
          ) : (
            <div className="foodButton">
              <img className="round" src={data ? data[1].url : "hello"} />
              {console.log(data[1])}
              <button data={data} onClick={handleRight(data)}>
                Yummy
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
//console.log(data[0]);

export default App;
