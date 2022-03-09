import Link from "next/link";

import useMediaQuery from "../../../../../utilities/useMediaQuery";

import styles from "./Preview.module.scss";

const Preview = ({ project }) => {
	const path = `/work/${project.slug}`;

	return (
		<div key={project.name} className="project">
			<div className="name">
				<h2>
					<Link href={path}>
						<a>{project.name}</a>
					</Link>
				</h2>
			</div>
			<div className={`${styles.flex} flex`}>
				<div className={styles.thumbnail}>
					<div
						className={`${styles.thumbnailInner} ${
							useMediaQuery(600) ? styles.desktop : styles.mobile
						}`}
					>
						<Link href={path}>
							<a aria-label={`Navigate to ${project.name} project`}></a>
						</Link>
					</div>
				</div>
				<div className={styles.overview}>
					<div className={styles.overviewInner}>
						<div className={styles.techSummary}>
							<h3>{project.technical}</h3>
						</div>
						<div className={styles.contributions}>
							<p>
								<b>My Contributions:</b>
								{project.contributions.map((contribution) => {
									return contribution;
								})}
							</p>
						</div>
						<Link href={path}>
							<a className="button">View Details</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
