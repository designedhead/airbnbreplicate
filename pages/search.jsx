import Place from "../public/img/place.webp";
import Footer from "../src/layout/footer";
import Header from "../src/layout/header";
import ListingTile from "../src/components/search/listing";
import { sanityClient, urlFor } from "../sanity.js";
import { useRouter } from "next/router";
import { differenceInDays, format, parseISO } from "date-fns";


const search = (props) => {
  const router = useRouter();
  const { location, startDate, endDate, guestsNumber } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const totalDays = differenceInDays(parseISO(endDate), parseISO(startDate));
  console.log("images", props);
  return (
    <div>
      <div className="blackbg">
        <Header
          placeholder={`${location} | ${range} | ${guestsNumber} guests`}
        />
      </div>
      <section id="search">
        <div className="searchsplit">
          <div className="left" id="left">
            <p className="detailstext">
              {props.listings.length}+ stays in {location} from {range}
            </p>
            {props.listings.map((listing) => (
              <ListingTile
                key={listing._id}
                name={listing.name}
                subtitle={listing.subtitle}
                tags={listing.tags}
                ratingNumber={listing.rating}
                ratingAmount={listing.numberOfReviews}
                imageOne={Place}
                imageSlideshow={listing?.listingImages}
                price={listing.price}
                totalDays={totalDays}
              />
            ))}
          </div>
          <div className="right" id="right">
            <p>This is the right green side</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default search;

export const getServerSideProps = async () => {
  // const query = `*[_type == "listing" && name match "Monteiro"]{
  const query = `*[_type == "listing"]{
    _id,
    name,
    subtitle,
    description,
    tags[]->,
    listingImages[]{
      asset->{url}
    },
  rating,
  numberOfReviews,
  price,
  }`;

  const listings = await sanityClient.fetch(query);

  return {
    props: {
      listings,
    },
  };
};
