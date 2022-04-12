import Image from "next/image";
import CardImage from "../../public/img/card.webp";

export default function Card() {
  return (
    <section id="card">
      <div className="container">
        <div className="textcontainer">
          <h2>
            Shop Airbnb <br /> gift cards
          </h2>
          <button>Learn more</button>
        </div>
        <div className="image">
          <Image src={CardImage} layout="responsive" />
        </div>
      </div>
    </section>
  );
}
