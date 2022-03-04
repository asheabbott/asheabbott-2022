import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useMediaQuery from "../../../utilities/useMediaQuery";

import styles from "./Header.module.scss";

const Header = ({ home = false }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		document.querySelector("body").classList.add("loaded");
	}, []);

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* TO DO */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<a className="skip-to-content" href="#main">
				Skip to main content
			</a>
			<div className={styles.homeLogoBuffer} aria-hidden="true"></div>
			<header className={styles.siteHeader}>
				<div className={styles.headerInner}>
					<div className="flex">
						<div className={styles.logo}>
							<div className={styles.logoInner}>
								<Link href="/" aria-label="Navigate to the homepage">
									<a>
										<Image
											src={
												useMediaQuery(600)
													? "/images/logo-home.svg"
													: "/images/logo-home-mobile.svg"
											}
											width={useMediaQuery(600) ? 1371 : 496}
											height={useMediaQuery(600) ? 95 : 275}
											alt="Ashe Abbott DiBlasi"
										/>
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
