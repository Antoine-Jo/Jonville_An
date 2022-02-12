import Head from "next/head";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>PortFolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <main>
        <About />

        <Portfolio />

        <Contact />
      </main>
    </>
  );
}
