import { createContext, useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useMediaQuery from "../../../utilities/useMediaQuery";

import Logo from "./logos/Logo";
import LogoMobile from "./logos/LogoMobile";

import styles from "./Header.module.scss";

const Header = ({ home = false, setTopSpace }) => {
	const headerRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const header = headerRef.current;
		const style = window.getComputedStyle(header);
		const headerH = header.getBoundingClientRect().height;
		const headerTop = parseInt(style.top);

		setTopSpace(headerH + (headerTop * 5));


    // // Set minimum height on main element
    // main.css({minHeight: `calc(100vh - ${bottomSpace}px)`});

    // // Set page header top padding
    // pageHeader.css({paddingTop: `${topSpace}px`});
		
		document.querySelector("body").classList.add("loaded");
	}, []);

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
			<div className={styles.homeLogoBuffer} aria-hidden="true"></div>
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
								className={styles.hamburger}
								aria-label="Open or close main menu"
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
