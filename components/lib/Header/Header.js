import { useEffect, useRef, useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";

import PageContext from "../Page/PageContext";
import useMediaQuery from "../../../utilities/useMediaQuery";

import Logo from "./logos/Logo";
import LogoMobile from "./logos/LogoMobile";

import styles from "./Header.module.scss";

const Header = () => {
	const [headerH, setHeaderH] = useState(null);
	const [position, setPosition] = useState(null);
	const headerRef = useRef(null);
	const homeLogoBufferRef = useRef(null);
	const pageData = useContext(PageContext);

	useEffect(() => {
		const header = headerRef.current;
		const style = window.getComputedStyle(header);
		const headerTop = parseInt(style.top);
		const homeLogoBuffer = homeLogoBufferRef.current;

		setHeaderH(header.getBoundingClientRect().height);

		pageData.setTopSpace(headerH + headerTop * 5);

		if (pageData.home) {
			pageData.setHomeLogoBufferH(
				homeLogoBuffer.getBoundingClientRect().height
			);
		}
	}, [pageData, headerH]);

	useEffect(() => {
		if (pageData.home) {
			if (
				pageData.scroll === false ||
				(pageData.scroll === true && pageData.menuOpen !== true)
			) {
				if (pageData.scrollTop > pageData.homeLogoBufferH) {
					setPosition("translateY(0)");
				} else {
					setPosition(
						`translateY(-${pageData.homeLogoBufferH - 1 + headerH}px)`
					);
				}
			}
		}
	}, [
		headerH,
		pageData.homeLogoBufferH,
		pageData.menuOpen,
		pageData.scroll,
		pageData.scrollTop,
		pageData.home,
	]);

	const handleBurger = () => {
		pageData.setMenuOpen(!pageData.menuOpen);
	};

	return (
		<>
			{/* <Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/images/icons/favicon-96x96.png" key="favicon" />
			</Head> */}
			<a className="skip-to-content" href="#main">
				Skip to main content
			</a>
			{pageData.home && (
				<div
					className={styles.homeLogoBuffer}
					ref={homeLogoBufferRef}
					aria-hidden="true"
				></div>
			)}
			<header
				className={styles.siteHeader}
				ref={headerRef}
				style={{ transform: position }}
			>
				<div className="header-inner">
					<div className={`flex ${styles.flex}`}>
						<div className={styles.logo}>
							<div
								className={`${styles.logoInner} ${
									useMediaQuery(600) ? styles.desktop : styles.mobile
								}`}
							>
								<Link href="/" aria-label="Navigate to the homepage">
									{useMediaQuery(600) ? <Logo /> : <LogoMobile />}
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
