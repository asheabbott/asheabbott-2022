import Page from "../../lib/Page/Page";
import PageHeader from "../../lib/PageHeader/PageHeader";
import Intro from "./Intro/Intro";
import Projects from "./Projects/Projects";

import styles from "./Work.module.scss";

const Work = () => {
	const meta = {
		// TO DO
		title: "Ashe Abbott DiBlasi",
		description: "",
		keywords: "",
	};

	return (
		<div className={styles.work}>
			<Page meta={meta}>
				<PageHeader title="Work" />
				<Intro />
				<Projects />
			</Page>
		</div>
	);
};

export default Work;
