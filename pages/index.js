import Head from "next/head";
import Image from "next/image";
import Card from "../src/components/card";
import Curiosity from "../src/components/curiosity";
import Discover from "../src/components/discover";
import FutureGetaways from "../src/components/futuregetaways";
import Hosting from "../src/components/hosting";
import Inspiration from "../src/components/inspiration";
import Search from "../src/components/search";
import Ukraine from "../src/components/ukraine";
import Footer from "../src/layout/footer";

import Header from "../src/layout/header";

export default function Home() {
  return (
    <section>
      <div className="blackbg searchsection">
        <Header bar={true} />
        {/* <Search /> */}
        <Ukraine />
      </div>
      <Curiosity />
      <Inspiration />
      <Discover />
      <Card />
      <Hosting />
      <FutureGetaways />
      <Footer />
    </section>
  );
}
