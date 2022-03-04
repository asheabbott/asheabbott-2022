import Head from "next/head";

import Header from "../../lib/Header/Header";
import PageHeader from "../../lib/PageHeader/PageHeader";
import Footer from "../../lib/Footer/Footer";

import styles from "./Work.module.scss";

const Work = () => {
	return (
		<div className={styles.work}>
			<Head>
				{/* TO DO */}
				<title>Ashe Abbott DiBlasi</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
			</Head>

			<Header />
			<main>
				<PageHeader title="Work" />
			</main>
			<Footer />
		</div>
	);
};

export default Work;
