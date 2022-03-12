import { useRef, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";

import PageContext from "../Page/PageContext";
import useMediaQuery from "../../../utilities/useMediaQuery";

import Logo from "./logos/Logo";
import LogoMobile from "./logos/LogoMobile";

import styles from "./Header.module.scss";

const Header = () => {
	const headerRef = useRef(null);
	const pageData = useContext(PageContext);

	useEffect(() => {
		const header = headerRef.current;
		const style = window.getComputedStyle(header);
		const headerH = header.getBoundingClientRect().height;
		const headerTop = parseInt(style.top);

		pageData.setTopSpace(headerH + headerTop * 5);

		document.querySelector("body").classList.add("loaded");
	});

	const handleBurger = () => {
		pageData.setMenuOpen(!pageData.menuOpen);
	};

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/images/icons/favicon-96x96.png" />
			</Head>
			<a className="skip-to-content" href="#main">
				Skip to main content
			</a>
			{pageData.home && (
				<div className={styles.homeLogoBuffer} aria-hidden="true"></div>
			)}
			<header className={styles.siteHeader} ref={headerRef}>
				<div className="header-inner">
					<div className={`flex ${styles.flex}`}>
						<div className={styles.logo}>
							<div
								className={`${styles.logoInner} ${
									useMediaQuery(600) ? styles.desktop : styles.mobile
								}`}
							>
								<Link href="/">
									<a aria-label="Navigate to the homepage">
										{useMediaQuery(600) ? <Logo /> : <LogoMobile />}
									</a>
								</Link>
							</div>
						</div>
						<div className={styles.menuBtn}>
							<button
								className={`${styles.hamburger} ${
									pageData.menuOpen ? styles.open : ""
								}`}
								aria-label="Open or close main menu"
								onClick={handleBurger}
							>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
