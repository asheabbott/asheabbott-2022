import Head from "next/head";

import Header from "../../lib/Header/Header";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Footer from "../../lib/Footer/Footer";

import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			<Head>
				{/* TO DO */}
				<title>Ashe Abbott DiBlasi</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
			</Head>

			<Header />
			<main>
				<Hero />
				<Intro />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
