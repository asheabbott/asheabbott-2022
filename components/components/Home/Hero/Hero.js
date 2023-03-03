import { useContext, useEffect } from "react";
import AppContext from "../../App/AppContext";
import styles from "./Hero.module.scss";

const Hero = () => {
	const appData = useContext(AppContext);

	useEffect(() => {
		appData.setVideo(true);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className={styles.hero}>
			<div className={styles.heroText}>
				<div className="container">
					<div className={`${styles.heroTextInner} animate`}>
						<h1>
							I’m a designer &amp; front-end web developer. I’ve been creating
							websites for more than 17 years.
						</h1>
					</div>
				</div>
			</div>
			<div className={styles.heroReel}>
				<div className="container">
					<div className="video" style={{ backgroundColor: "#f52d83" }}>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/0e_Oouy_wCE?autoplay=1&controls=0&loop=1&mute=1&playlist=0e_Oouy_wCE&rel=0"
							title="Work Samples"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							onLoad={() => {
								appData.setVideoLoaded(true);
							}}
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
