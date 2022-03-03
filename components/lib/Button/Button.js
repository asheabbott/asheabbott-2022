import Link from "next/link";
import styles from "./Button.module.scss";

const Button = ({ text, href, external = false }) => {
	return (
		!external && (
			<Link href={href}>
				<a className={styles.button}>{text}</a>
			</Link>
		)
	);
};

export default Button;
