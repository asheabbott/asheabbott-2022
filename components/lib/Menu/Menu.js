import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import PageContext from "../Page/PageContext";
import menuDB from "./menuDB";

import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const Menu = () => {
	const [currentPage, setCurrentPage] = useState();
	const router = useRouter();
	const pageData = useContext(PageContext);

	useEffect(() => {
		setCurrentPage(router.pathname);
	}, [router.pathname]);

	const dynamicStyles = {
		mainNav: {
			transform: pageData.menuOpen ? "translateY(0)" : "translateY(-100%)",
		},
	};

	return (
		<section className={styles.mainNavigation} style={dynamicStyles.mainNav}>
			<div className={`${styles.container} container`}>
				<nav
					className={`${styles.mainMenu} ${styles.flex} flex`}
					aria-label="Main Menu"
				>
					<div className={styles.menuMainMenuContainer}>
						<ul className={styles.menu}>
							{menuDB.map((item) => {
								return (
									<MenuItem
										key={item.text}
										item={item}
										currentPage={currentPage}
									/>
								);
							})}
						</ul>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default Menu;
