import Page from "../../lib/Page/Page";
import PageHeader from "../../lib/PageHeader/PageHeader";
import Bio from "./Bio/Bio";
import Skills from "./Skills/Skills";

import styles from "./About.module.scss";

const About = () => {
	const meta = {
		title: "About",
		description: "",
		image: "",
		keywords: "",
	};

	return (
		<div className={styles.about}>
			<Page meta={meta}>
				<PageHeader title="About" />
				<Bio />
				<Skills />
			</Page>
		</div>
	);
};

export default About;
