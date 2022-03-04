import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<>
			<footer className={styles.siteFooter}>
				<div className="flex">
					<div className={styles.text}>
						<a className={styles.email} href="mailto:ashe@asheabbott.com">
							ashe@asheabbott.com
						</a>
						<p className={styles.copyright}>
							&copy; {new Date().getFullYear()} Ashe Abbott DiBlasi
						</p>
					</div>
					<div className={styles.social}>
						<div className="flex">
							<div className={styles.row}>
								<a
									href="https://www.linkedin.com/in/asheabbott"
									target="blank"
									rel="noreferrer"
									aria-label="Visit Ashe's LinkedIn"
								>
									<FontAwesomeIcon icon={["fab", "linkedin-in"]} />
								</a>

								<a
									href="https://github.com/asheabbott"
									target="blank"
									rel="noreferrer"
									aria-label="Visit Ashe's GitHub"
								>
									<FontAwesomeIcon icon={["fab", "github"]} />
								</a>
							</div>
							<div className={styles.row}>
								<a
									href="https://dev.to/asheabbott"
									target="blank"
									rel="noreferrer"
									aria-label="Visit Ashe's DEV Community page"
								>
									<FontAwesomeIcon icon={["fab", "dev"]} />
								</a>

								<a
									href="https://stackoverflow.com/users/904662/ashe-abbott"
									target="blank"
									rel="noreferrer"
									aria-label="Visit Ashe's Stack Overflow"
								>
									<FontAwesomeIcon icon={["fab", "stack-overflow"]} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className={styles.footerBuffer} aria-hidden="true"></div>
			{/* <div className="loading">
				<div className="loading-icon">
					<div className="letter-a">
						<svg>
							<use xlink:href="#loading-screen-a" />
						</svg>
					</div>
					<div className="letter-s">
						<svg>
							<use xlink:href="#loading-screen-s" />
						</svg>
					</div>
					<div className="letter-h">
						<svg>
							<use xlink:href="#loading-screen-h" />
						</svg>
					</div>
					<div className="letter-e">
						<svg>
							<use xlink:href="#loading-screen-e" />
						</svg>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default Footer;
