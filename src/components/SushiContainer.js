import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0)

  const shownSushi = sushis.slice(sushiIndex, sushiIndex + 4)

  return (
    <div className="belt">
      {shownSushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />)}
      <MoreButton onMoreClick={() => setSushiIndex(sushiIndex => sushiIndex + 4) % sushis.length} />
    </div>
  );
}

export default SushiContainer;
