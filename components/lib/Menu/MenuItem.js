import Link from "next/link";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ item, currentPage }) => {
	return (
        <li
			className={`${styles.menuItem} ${
				currentPage === item.href ? styles.currentMenuItem : ""
			}`}
		>
			<Link href={item.href} aria-current="page">
				{item.text}
			</Link>
		</li>
    );
};

export default MenuItem;
