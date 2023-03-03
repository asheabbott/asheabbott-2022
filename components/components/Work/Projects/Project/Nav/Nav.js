import Link from "next/link";
import projectsDB from "../../projectsDB";
import useMediaQuery from "../../../../../../utilities/useMediaQuery";
import styles from "./Nav.module.scss";

const Nav = () => {
	let thumbClass = "";

	if (useMediaQuery(425)) {
		thumbClass = "tablet";
	} else {
		thumbClass = "mobileDesktop";
	}

	if (useMediaQuery(992)) {
		thumbClass = "mobileDesktop";
	}

	return (
        <section className={styles.projectNavSection}>
			<div className="container">
				<h2>Projects</h2>
			</div>
			<div className={styles.projectNav}>
				<div className={`${styles.flex} flex`}>
					{projectsDB.map((project) => {
						const path = `/work/${project.slug}`;

						return (
                            <div key={project.id} className={styles.project}>
								<div className={`${styles.projectInner} ${styles.thumbClass}`}>
									<Link
                                        href={path}
                                        style={{ backgroundImage: `url(${project.thumbnail})` }}
                                        aria-label={`Navigate to ${project.name} project`}>

                                    </Link>
								</div>
							</div>
                        );
					})}
				</div>
			</div>
		</section>
    );
};

export default Nav;
