import styles from "./PageHeader.module.scss";

const PageHeader = ({ title }) => {
	return (
		<header className={styles.pageHeader}>
			<div className="container">
				<h1 className="animate">{title}</h1>
			</div>
		</header>
	);
};

export default PageHeader;
