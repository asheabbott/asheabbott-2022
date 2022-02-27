import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useMediaQuery from "../../../utilities/useMediaQuery";

import styles from "./Header.module.scss";

const Header = ({ home = false }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* TO DO */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
						{/* <div className={styles.menuBtn}>
							<button
								className={styles.hamburger}
								aria-label="Open or close main menu"
							>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div> */}
					</div>
				</div>
			</header>
			{/* <header className={`${styles.header} ${home ? styles.inHero : ""}`}>
				<div className={styles.headerContent}>
					<div className={styles.headerContentInner}>
						<div className={styles.logo}>
							<Link href="/">
								<a>
									<Image
										src={home ? "/images/logo-dark.svg" : "/images/logo.svg"}
										width={136}
										height={62}
										alt="tuzag logo"
									/>
								</a>
							</Link>
						</div>
						<div className={styles.hamburger}>
							<div className={styles.hamburgerInner}>
								<button
									aria-label="Open menu"
									onClick={() => {
										setMenuOpen(true);
									}}
								>
									<FontAwesomeIcon icon="bars" />
								</button>
							</div>
						</div>
					</div>
				</div>
				{menuOpen && <Menu setMenuOpen={setMenuOpen} />}
			</header> */}
		</>
	);
};

export default Header;
