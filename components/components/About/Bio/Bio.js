import Image from "next/image";
import Button from "../../../lib/Button/Button";
import styles from "./Bio.module.scss";

const Bio = () => {
	return (
		<section className={`${styles.bioContent} animate`}>
			<div className="container">
				<div className={`flex ${styles.flex}`}>
					<div className={styles.headshot}>
						<Image
							src="/images/headshots/ashe-abbott.webp"
							width={2208}
							height={2208}
							alt="Photo of Ashe Abbott DiBlasi"
							priority
						/>
					</div>
					<div className={styles.bio}>
						<p>
							I’m a designer & front-end web developer. I’ve been creating
							websites for more than 17 years.
						</p>

						<p>
							As a well-rounded creator of websites, I have extensive experience
							contributing to all phases of the website life cycle — like{" "}
							<strong>discovery</strong>, <strong>strategy</strong>,{" "}
							<strong>user experience</strong>, <strong>design</strong> and
							<strong> development</strong>.
						</p>

						<p>
							My development toolbox includes modern dev tools like{" "}
							<strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
							<strong>Sass</strong>, <strong>JavaScript ES6</strong> and{" "}
							<strong>React</strong>, but I can throwback to older tools as
							needed. In addition to writing front-end code, I have a long
							history of creating custom, easy-to-use <strong>WordPress</strong>{" "}
							themes from scratch.
						</p>
						<p>
							I’m currently the{" "}
							<strong>Senior Experience Designer &amp; Developer</strong> at{" "}
							<a
								href="https://wearetuzag.com"
								target="_blank"
								rel="noreferrer noopener"
							>
								Tuzag
							</a>
							, a software company in the artificial intelligence and healthcare
							spaces.
						</p>

						<Button
							className="button"
							text="Download my Resume"
							href="/files/resume-ashe-abbott-diblasi.pdf"
							external={true}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Bio;
