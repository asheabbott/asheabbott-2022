import Link from "next/link";
import styles from "./Button.module.scss";

const Button = ({ text, href, external = false }) => {
	return !external ? (
		<Link href={href} className={styles.button}>
			{text}
		</Link>
	) : (
		<a className={styles.button} href={href} target="_blank" rel="noreferrer">
			{text}
		</a>
	);
};

export default Button;
