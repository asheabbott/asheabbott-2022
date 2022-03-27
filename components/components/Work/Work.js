import Page from "../../lib/Page/Page";
import PageHeader from "../../lib/PageHeader/PageHeader";
import Intro from "./Intro/Intro";
import Projects from "./Projects/Projects";
import Awards from "./Awards/Awards";

import styles from "./Work.module.scss";

const Work = () => {
	const meta = {
		title: "Work",
		description: "",
		keywords: "",
	};

	return (
		<div className={styles.work}>
			<Page meta={meta}>
				<PageHeader title="Work" />
				<Intro />
				<Projects />
				<Awards />
			</Page>
		</div>
	);
};

export default Work;
