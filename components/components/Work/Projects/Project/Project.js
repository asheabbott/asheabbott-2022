import Head from "next/head";

import projectsDB from "../projectsDB";

import Header from "../../../../lib/Header/Header";
import PageHeader from "../../../../lib/PageHeader/PageHeader";
import Demo from "./Demo/Demo";
import Details from "./Details/Details";
import Samples from "./Samples/Samples";
import Nav from "./Nav/Nav";
import Footer from "../../../../lib/Footer/Footer";

import styles from "./Project.module.scss";

const Project = ({ id }) => {
	const project = projectsDB.find((project) => project.id === id);

	return (
		<div className={styles.project}>
			<Head>
				{/* TO DO */}
				<title>Ashe Abbott DiBlasi</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
			</Head>

			<Header />
			<main>
				<PageHeader project={true} title={project.name} />
				{project.video && <Demo project={project} />}
				<Details project={project} />
				<Samples project={project} />
				<Nav />
			</main>
			<Footer />
		</div>
	);
};

export default Project;
