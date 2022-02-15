import Head from "next/head";
import Homepage from "../components/HomePage";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Services from "../components/Services";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>PortFolio</title>
        <meta
          name="description"
          content="Développeur Web basé à Cannes, Alpes-Maritimes (06). Je fais de la création de site internet mais aussi de la refonte de site web, de l'hébergement et de la maintenance. Développement Web, freelance"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <main className="mt-[12rem]">
        <Homepage />

        <About />

        <Services />

        <Portfolio />

        <Contact />
      </main>

      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      <Script
        id="submit"
        onSubmit={(e) => {
          emailjs.init("user_6Dn3ZkCHSUyheBuJ3vHvE");
        }}
      />
    </>
  );
}
