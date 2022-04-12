import Image from "next/image";
import Brighton from "../../public/img/tiles/brighton.webp";

export default function InspirationTile({ name, miles, image, color }) {
  return (
    <div className="tiles" style={{ backgroundColor: `${color}` }}>
      <div>
        <Image src={image} className="image" layout="responsive"/>
      </div>
      <div className="tilesbottom">
        <h4>{name}</h4>
        <p>{miles} miles away</p>
      </div>
    </div>
  );
}
