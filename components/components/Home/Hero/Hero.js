import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroText}>
				<div className="container">
					<div className={`${styles.heroTextInner} animate`}>
						<h1>
							As a web designer &amp; front-end developer, I’ve been bringing
							websites to life for more than 15 years.
						</h1>
					</div>
				</div>
			</div>
			<div className={styles.heroReel}>
				<div className="container">
					<div className="video">
						<iframe
							src="https://player.vimeo.com/video/539800751?background=1"
							width="640"
							height="360"
							frameBorder="0"
							allow="autoplay; fullscreen; picture-in-picture"
							allowFullScreen
							title="Work Samples"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;