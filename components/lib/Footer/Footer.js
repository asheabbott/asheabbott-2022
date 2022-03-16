import { useEffect, useRef, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageContext from "../Page/PageContext";
import styles from "./Footer.module.scss";

const Footer = () => {
	const [footerH, setFooterH] = useState(null);
	const [footerOffset, setFooterOffset] = useState(null);
	const [position, setPosition] = useState(null);
	const footerRef = useRef(null);
	const pageData = useContext(PageContext);

	useEffect(() => {
		const footer = footerRef.current;
		const style = window.getComputedStyle(footer);

		setFooterOffset(parseInt(style.bottom));
		setFooterH(footer.getBoundingClientRect().height);

		pageData.setFooterBufferHeight(footerH + footerOffset * 2.4);
	}, [pageData, footerH, footerOffset]);

	useEffect(() => {
		if (pageData.home) {
			if (
				pageData.scroll === false ||
				(pageData.scroll === true && pageData.menuOpen !== true)
			) {
				if (pageData.scrollTop > pageData.homeLogoBufferH) {
					setPosition("translateY(0)");
				} else {
					setPosition(`translateY(${footerH + footerOffset}px)`);
				}
			}
		}
	}, [
		footerH,
		footerOffset,
		pageData.homeLogoBufferH,
		pageData.menuOpen,
		pageData.scroll,
		pageData.scrollTop,
		pageData.home,
	]);

	return (
		<>
			<footer
				className={styles.siteFooter}
				ref={footerRef}
				style={{ transform: position }}
			>
				<div className={`flex ${styles.flex}`}>
					<div className={styles.text}>
						<a className={styles.email} href="mailto:ashe@asheabbott.com">
							ashe@asheabbott.com
						</a>
						<p className={styles.copyright}>
							&copy; {new Date().getFullYear()} Ashe Abbott DiBlasi
						</p>
					</div>
					<div className={styles.social}>
						<div className={`flex ${styles.flex}`}>
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
			<div
				className={styles.footerBuffer}
				style={{ height: pageData.footerBufferHeight }}
				aria-hidden="true"
			></div>
		</>
	);
};

export default Footer;
