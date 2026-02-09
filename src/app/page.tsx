import React from "react";
import Head from "next/head";
import Banner from "./components/Banner";
import Homepage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ThemeSwitcher from "./ThemeSwitcher";

const Home: React.FC = () => {
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
            {/* <Banner /> */}
            <ThemeSwitcher />

            <main className="mt-[12rem]">
                <Homepage />

                <About />

                <Services />

                <Portfolio />

                <Contact />
            </main>

            <footer className="my-[5rem] max-w-[1050px] px-[10px] mx-auto flex justify-around items-center">
                <ContentFooter />
            </footer>
        </>
    );
};

export default Home;

function ContentFooter() {
    return (
        <>
            <p className="text-[2rem] text-center">
                Antoine <span className="text-[#9699A2]">Jonville</span>
            </p>
            <p className="text-[#9699A2] text-center text-[1.3rem]">© 2022. All Rights Reserved.</p>
        </>
    );
}
