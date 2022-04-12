import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function ListingTile({
  name,
  image,
  subtitle,
  tags,
  ratingNumber,
  ratingAmount,
}) {
  return (
    <div className="tile">
      <div className="tile_image">
        <Image src={image} layout="responsive" />
      </div>

      <div className="tile_right" id="tileright">
        <div className="tile_right_top">
          <div>
            <p>{subtitle}</p>
            <h3>{name}</h3>
            <div className="divider" />
            <span className="tile_attributes">
              {/* 2 guests · 1 bedroom · 1 bed · 1 bathroom · Wifi · Kitchen ·
              Washing Machine · Air con */}
              {tags?.map(t => (<span>{t.name} · </span>))}
            </span>

            {/* {tags.map((tag) => (
              <span className="tile_attributes">{tag}</span>
            ))} */}
          </div>
          <HeartIcon className="icon" />
        </div>
        <div id="tile_ratings" className="tile_ratings">
          <StarIcon className="icon" />
          <p className="rating_number">{ratingNumber} </p>
          <p className="rating_amount">({ratingAmount} reviews)</p>
        </div>
      </div>
    </div>
  );
}
