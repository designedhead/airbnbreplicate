import Image from "next/image";
import Brighton from "../../public/img/tiles/brighton.webp";
import Windermere from "../../public/img/tiles/windermere.webp";
import Hastings from "../../public/img/tiles/hastings.webp";
import Newquay from "../../public/img/tiles/newquay.webp";

import InspirationTile from "./tile";

export default function Inspiration() {
  return (
    <section id="inspiration" className="inspirationsection">
      <h2>Inspiration for your next trip</h2>
      <div className="tilescontainer">
        <InspirationTile
          name="Brighton"
          miles="51"
          image={Brighton}
          color="#DD3150"
        />
        <InspirationTile
          name="Windermere"
          miles="224"
          image={Windermere}
          color="#D93B30"
        />
        <InspirationTile
          name="Newquay"
          miles="223"
          image={Newquay}
          color="#BC1A6D"
        />
        <InspirationTile
          name="Hastings"
          miles="60"
          image={Hastings}
          color="#CC2C4A"
        />
      </div>
    </section>
  );
}
