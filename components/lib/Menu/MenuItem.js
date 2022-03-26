import Link from "next/link";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ item, currentPage }) => {
	return (
		<li
			className={`${styles.menuItem} ${
				currentPage === item.href ? styles.currentMenuItem : ""
			}`}
		>
			<Link href={item.href}>
				<a aria-current="page">{item.text}</a>
			</Link>
		</li>
	);
};

export default MenuItem;
