import Link from "next/link";
import styles from "./Button.module.scss";

const Button = ({ text, href, external = false }) => {
	return !external ? (
		<Link href={href}>
			<a className={styles.button}>{text}</a>
		</Link>
	) : (
		<a className={styles.button} href={href} target="_blank" rel="noreferrer">
			{text}
		</a>
	);
};

export default Button;
