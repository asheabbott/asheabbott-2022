import projectsDB from "./projectsDB";

import styles from "./Projects.module.scss";
import Preview from "./Preview/Preview";

const Projects = () => {
	return (
		<section className={styles.projects}>
			<div className="container">
				<div className={`${styles.flex} flex`}>
					{projectsDB.map((project) => {
						return <Preview key={project.id} project={project} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
