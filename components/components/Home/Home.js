import Page from "../../lib/Page/Page";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";

import styles from "./Home.module.scss";

const Home = () => {
	const meta = {
		title: "Home",
		description: "",
		keywords: "",
	};

	return (
		<div className={styles.home}>
			<Page meta={meta} home={true}>
				<Hero />
				<Intro />
			</Page>
		</div>
	);
};

export default Home;
