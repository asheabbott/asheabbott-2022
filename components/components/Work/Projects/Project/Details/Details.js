import Button from "../../../../../lib/Button/Button";
import styles from "./Details.module.scss";

const Details = ({ project }) => {
	const formattedDescription = () => {
		const descriptionArray = project.description.split("[break]");

		const formattedDescriptionArray = descriptionArray.map((paragraph) => (
			<p key={paragraph}>{paragraph}</p>
		));

		return formattedDescriptionArray;
	};

	return (
		<section className={styles.detailsSection}>
			<div className="container">
				<div className={`${styles.flex} flex`}>
					<div className={styles.summary}>
						<div
							className={`${styles.summaryInner} ${
								!project.buttons ? styles.noButtons : ""
							}`}
						>
							{formattedDescription()}
							{project.buttons && (
								<div className={styles.buttons}>
									{project.buttons.map((button) => {
										return (
											<Button
												key={button.text}
												text={button.text}
												href={button.url}
												external={true}
											/>
										);
									})}
								</div>
							)}
						</div>
					</div>
					<div className={styles.details}>
						<div className={styles.techSummary}>
							<h2>Technical</h2>
							<p>{project.technical}</p>
						</div>
						<div className="contributions">
							<h2>Contributions</h2>
							<ul>
								{project.contributions.map((contribution) => {
									return <li key={contribution}>{contribution}</li>;
								})}
							</ul>
						</div>

						{project.awards && (
							<div className={styles.awards}>
								<h2>Awards</h2>
								<ul>
									{project.awards.map((award) => {
										return <li key={award}>{award}</li>;
									})}
								</ul>
							</div>
						)}

						{project.agency && (
							<div className={styles.agency}>
								<h2>Agency</h2>
								<p>{project.agency}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Details;
