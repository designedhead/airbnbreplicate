import Image from "next/image";
import CardImage from "../../public/img/card.webp";
import CardImageFull from "../../public/img/card-full.webp";

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
          <div className="image_small">
            <Image src={CardImage} layout="responsive" />
          </div>
          <div className="image_full">
            <Image src={CardImageFull} layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
}
