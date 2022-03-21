import Image from "next/image";
import awardsDB from "./awardsDB";
import styles from "./Awards.module.scss";

const Awards = () => {
	return (
		<section className={styles.awards}>
			<div className="container">
				<div className={styles.awardLogos}>
					{awardsDB.map((award) => (
						<div key={award.id} className={styles.awardLogo}>
							<Image
								src={award.image.path}
								width={award.image.width}
								height={award.image.height}
								alt={award.image.alt}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Awards;
