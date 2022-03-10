import Image from "next/image";
import styles from "./Samples.module.scss";

const Samples = ({ project }) => {
	return (
		<section className={styles.sampleSection}>
			<div className="container">
				<div className={`${styles.flex} flex`}>
					{project.screenshots.map((screenshot) => {
						return (
							<div key={screenshot.path} className={styles.screenshot}>
								<Image
									src={screenshot.path}
									width={screenshot.width}
									height={screenshot.height}
									alt={screenshot.alt}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Samples;
