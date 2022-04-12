export default function Discover() {
  return (
    <section id="inspiration" className="inspirationsection">
      <h2>Discover Airbnb Experiences</h2>
      <div className="discover_tiles_container">
        <div
          className="discover_tiles"
          style={{ backgroundImage: 'url("/img/thingstodo/1.webp")' }}
        >
          <h2 className="discover_h2">
            Things to do <br />
            on your Trip
          </h2>
          <button className="discover_button">Experiences</button>
        </div>

        <div
          className="discover_tiles"
          style={{ backgroundImage: 'url("/img/thingstodo/2.webp")' }}
        >
          <h2 className="discover_h2">
            Things to do <br />
            on your Trip
          </h2>
          <button className="discover_button">Online Experiences</button>
        </div>
      </div>
    </section>
  );
}
