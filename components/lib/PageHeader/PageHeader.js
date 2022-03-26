import { useContext } from "react";
import PageContext from "../Page/PageContext";
import styles from "./PageHeader.module.scss";

const PageHeader = ({ project = false, title }) => {
	const pageData = useContext(PageContext);

	return (
		<header
			className={`${styles.pageHeader} ${project ? styles.projectHeader : ""}`}
			style={{ paddingTop: pageData.topSpace }}
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
