import Link from "next/link";
import useMediaQuery from "../../../../../utilities/useMediaQuery";
import Button from "../../../../lib/Button/Button";
import styles from "./Preview.module.scss";

const Preview = ({ project }) => {
	const path = `/work/${project.slug}`;

	return (
        <div key={project.name} className={styles.preview}>
			<div className={styles.name}>
				<h2>
					<Link href={path}>
						{project.name}
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
						<Link
                            href={path}
                            style={{ backgroundImage: `url(${project.thumbnail})` }}
                            aria-label={`Navigate to ${project.name} project`}>

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
								<b>My Contributions: </b>
								{project.contributions.join(", ")}
							</p>
						</div>
						<Button text="View Details" href={path} />
					</div>
				</div>
			</div>
		</div>
    );
};

export default Preview;
