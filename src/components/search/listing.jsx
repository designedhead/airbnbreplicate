import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
// import swiper for images
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ListingTile = ({
  name,
  subtitle,
  tags,
  ratingNumber,
  ratingAmount,
  price,
  totalDays,
  imageSlideshow,
}) => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    if (imageSlideshow !== null) {
      let tmp = [];
      imageSlideshow.map((f) => {
        console.log("ffff", f.asset?.url);
        if (f.asset?.url !== undefined) {
          tmp = [...tmp, f.asset.url];
        }
      });

      setUrls(tmp);
    }
  }, [imageSlideshow]);

  return (
    <div className="tile">
      <div className="tile_image">
        <Swiper pagination={true} modules={[Pagination]} className="swiper">
          {urls.length !== 0 &&
            urls.map((image, i) => (
              <SwiperSlide className="swiper-slide">
                <Image
                  classname="image-border"
                  key={i}
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          ...
        </Swiper>
      </div>

      <div className="tile_right" id="tileright">
        <div className="tile_right_top">
          <div>
            <p>{subtitle}</p>
            <h3>{name}</h3>
            <div className="divider" />
            {tags?.map((tag, i) => (
              <span key={i} className="tile_attributes">
                {tag.name}
              </span>
            ))}
          </div>
          <HeartIcon className="icon" />
        </div>
        <div className="tile_bottom">
          <div id="tile_ratings" className="tile_ratings">
            <StarIcon className="icon" />
            <p className="rating_number">{ratingNumber} </p>
            <p className="rating_amount">({ratingAmount} reviews)</p>
          </div>
          <div className="tile_pricing" id="tile_pricing">
            <p className="price">
              <strong>£{price}</strong> night
            </p>
            <p className="total">£{totalDays * price} total</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingTile;
