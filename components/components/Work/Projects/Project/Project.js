// import Head from "next/head";

import projectsDB from "../projectsDB";

// import Header from "../../../../lib/Header/Header";
import Page from "../../../../lib/Page/Page";
import PageHeader from "../../../../lib/PageHeader/PageHeader";
import Demo from "./Demo/Demo";
import Details from "./Details/Details";
import Samples from "./Samples/Samples";
import Nav from "./Nav/Nav";
// import Footer from "../../../../lib/Footer/Footer";

import styles from "./Project.module.scss";

const Project = ({ id }) => {
	const meta = {
		// TO DO
		title: "Ashe Abbott DiBlasi",
		description: "",
		keywords: "",
	};

	const project = projectsDB.find((project) => project.id === id);

	return (
		<div className={styles.project}>
			<Page meta={meta}>
				<PageHeader project={true} title={project.name} />
				{project.video && <Demo project={project} />}
				<Details project={project} />
				<Samples project={project} />
				<Nav />
			</Page>
		</div>
	);
};

export default Project;
