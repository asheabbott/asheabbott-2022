import skillsDB from "./skillsDB";
import styles from "./Skills.module.scss";

const Skills = () => {
	return (
		<section className={styles.skillSet}>
			<div className="container">
				<h2>Skill Set</h2>
				<div className={styles.skills}>
					<div className={`${styles.skillHeaders} ${styles.flex} flex`}>
						{skillsDB.map((skillLevel) => {
							return (
								<div key={skillLevel.title} className={styles.skillLevel}>
									<header className={styles.skillLevelHeader}>
										<h3>{skillLevel.title}</h3>
										<p className={styles.description}>
											{skillLevel.description}
										</p>
									</header>
								</div>
							);
						})}
					</div>
					<div className={`${styles.skillLevels} ${styles.flex} flex`}>
						{skillsDB.map((skillLevel) => {
							return (
								<div key={skillLevel.title} className={styles.skillLevel}>
									<header className={styles.skillLevelHeader}>
										<h3>{skillLevel.title}</h3>
										<p className={styles.description}>
											{skillLevel.description}
										</p>
									</header>
									<div className={styles.skillGroups}>
										{skillLevel.skillGroups.map((skillGroup) => {
											return (
												<div
													key={skillGroup.group}
													className={styles.skillGroup}
												>
													<h4>{skillGroup.group}</h4>
													<ul>
														{skillGroup.skills.map((skill) => {
															return <li key={skill}>{skill}</li>;
														})}
													</ul>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
