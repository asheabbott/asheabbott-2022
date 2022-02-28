import Head from "next/head";

import Header from "../../lib/Header/Header";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";

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
			<Hero />
			<Intro />
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
