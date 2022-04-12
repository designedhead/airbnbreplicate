import { GlobeAltIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footerstyle">
        <div className="footer_contain">
          <div className="footer_collumn">
            <div>
              <h4>Support</h4>
              <p>Help Centre</p>
              <p>Safety information</p>
              <p>Cancellation options</p>
              <p>Our COVID-19 Response</p>
              <p>Supporting people with disabilities</p>
              <p>Report a neighbourhood concern</p>
            </div>
            <div>
              <h4>Community</h4>
              <p>Airbnb.org: disaster relief housing</p>
              <p>Support Afghan refugees</p>
              <p>Combating discrimination</p>
            </div>
            <div>
              <h4>Hosting</h4>
              <p>Try hosting</p>
              <p>AirCover: protection for Hosts</p>
              <p>Explore hosting resources</p>
              <p>Visit our community forum</p>
              <p>How to host responsibly</p>
            </div>
            <div>
              <h4>About</h4>
              <p>Newsroom</p>
              <p>Learn about new features</p>
              <p>Letter from our founders</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Airbnb Luxe</p>
            </div>
          </div>
          <div className="divider" />
          <div className="footer_details">
            <div className="flex">
              <p>© 2022 Pod Software, Inc</p>
              <p>·</p>
              <p>Privacy</p>
              <p>·</p>
              <p>Terms</p>
              <p>·</p>
              <p>Sitemap</p>
            </div>
            <div className="social_flex">
              <div className="social_flex_two">
                <GlobeAltIcon className="icons" />
                <p className="social_underline">English(GB)</p>
              </div>
              <div className="social_flex_two">
                <p>£</p>
                <p className="social_underline">GBP</p>
              </div>
              <svg
                id="Layer_1"
                enableBackground="new 0 0 20 20"
                height="512"
                viewBox="0 0 20 20"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
              >
                <g fill="rgb(0,0,0)">
                  <path d="m15 0h-10c-2.8 0-5 2.2-5 5v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5v-10c0-2.8-2.2-5-5-5zm3 15c0 1.7-1.3 3-3 3h-10c-1.7 0-3-1.3-3-3v-10c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3z" />
                  <path d="m10 5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                  <circle cx="15" cy="5" r="1" />
                </g>
              </svg>
              <svg
                id="Layer_1"
                enableBackground="new 0 0 100 100"
                height="512"
                viewBox="0 0 100 100"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
              >
                <path
                  id="_x30_4.Twitter"
                  d="m89.9 25.2c-3 1.3-6.1 2.2-9.4 2.6 3.4-2 6-5.2 7.2-9.1-3.2 1.9-6.7 3.2-10.4 4-3-3.2-7.3-5.2-12-5.2-9.1 0-16.4 7.4-16.4 16.4 0 1.3.1 2.5.4 3.7-13.6-.6-25.6-7.2-33.7-17.1-5.8 10.4.7 19 5 21.9-2.6 0-5.2-.8-7.4-2 0 8.1 5.7 14.8 13.1 16.3-1.6.5-5.2.8-7.4.3 2.1 6.5 8.2 11.3 15.3 11.4-5.6 4.4-13.8 7.9-24.3 6.8 7.3 4.7 15.9 7.4 25.2 7.4 30.2 0 46.6-25 46.6-46.6 0-.7 0-1.4-.1-2.1 3.4-2.5 6.2-5.4 8.3-8.7z"
                />
              </svg>
              <svg
                id="Bold"
                enableBackground="new 0 0 24 24"
                height="512"
                viewBox="0 0 24 24"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className="icons"
              >
                <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
