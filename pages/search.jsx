import Place from "../public/img/place.webp";
import Footer from "../src/layout/footer";
import Header from "../src/layout/header";
import ListingTile from "../src/components/search/listing";
import { sanityClient, urlFor } from "../sanity.js";

const search = (props) => {
  console.log("props", props);
  return (
    <div>
      <div className="blackbg">
        <Header />
      </div>
      <section id="search">
        <div className="searchsplit">
          <div className="left" id="left">
            <p className="detailstext">{props.count}+ stays in Lisbon</p>
            {props.listings.map((listing) => (
              <ListingTile
                key={listing._id}
                name={listing.name}
                subtitle={listing.subtitle}
                tags={listing.tags}
                ratingNumber={listing.rating}
                ratingAmount={listing.numberOfReviews}
                image={Place}
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
  const query = `*[_type == "listing"]{
    _id,
    name,
    subtitle,
    description,
    tags[]->,
  rating,
  numberOfReviews,
  }`;
  const querytwo = 
  'count(*[_type == "listing"])';

  const listings = await sanityClient.fetch(query);
  const count = await sanityClient.fetch(querytwo);

  return {
    props: {
      listings,
      count,
    },
  };
};
