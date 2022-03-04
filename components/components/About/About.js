import Head from "next/head";

import Header from "../../lib/Header/Header";
import PageHeader from "../../lib/PageHeader/PageHeader";
import Bio from "./Bio/Bio";
import Footer from "../../lib/Footer/Footer";

import styles from "./About.module.scss";

const About = () => {
	return (
		<div className={styles.about}>
			<Head>
				{/* TO DO */}
				<title>Ashe Abbott DiBlasi</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
			</Head>

			<Header />
			<main>
        <PageHeader title="About" />
        <Bio />
			</main>
			<Footer />
		</div>
	);
};

export default About;
