import { SearchIcon } from "@heroicons/react/solid";

export default function Search() {
  return (
    <section className="">
      <div id="search" className="bar">
        <div className="baritems">
          <h4>Location</h4>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Where are you going?"
          />
        </div>
        <div className="divider" />
        <div className="baritems">
          <h4>Check in</h4>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Add dates"
          />
        </div>
        <div className="divider" />
        <div className="baritems">
          <h4>Check out</h4>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Add dates"
          />
        </div>
        <div className="divider" />
        <div className="baritems">
          <h4>Guests</h4>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Add Guests"
          />
        </div>
        <div className="searchbt">
          <SearchIcon />
        </div>
      </div>
    </section>
  );
}
