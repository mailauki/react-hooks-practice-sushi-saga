import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eatenSushis, setEatenSushis] = useState([])
  const [moneyLeft, setMoneyLeft] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      const updatedSushis = data.map(sushi => {
        return {...sushi, eaten: false}
      })
      setSushis(updatedSushis)
    })
  }, [])


  function handleEatenSushi(eatenSushi) {
      if((moneyLeft - eatenSushi.price) > 0) {
        const updatedSushis = sushis.map(sushi => {
          if(sushi.id === eatenSushi.id) return {...sushi, eaten: true}
          return sushi
        })
        setSushis(updatedSushis)
        setEatenSushis([...eatenSushis, eatenSushi])
        setMoneyLeft(moneyLeft - eatenSushi.price)
      }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatenSushi} />
      <Table plates={eatenSushis} moneyLeft={moneyLeft} />
    </div>
  );
}

export default App;
