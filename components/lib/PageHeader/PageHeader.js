import styles from "./PageHeader.module.scss";

const PageHeader = ({ project = false, title }) => {
	return (
		<header
			className={`${styles.pageHeader} ${project ? styles.projectHeader : ""}`}
		>
			<div className="container">
				{project ? (
					<h1 className="animate">
						Project: <span>{title}</span>
					</h1>
				) : (
					<h1 className="animate">{title}</h1>
				)}
			</div>
		</header>
	);
};

export default PageHeader;
