import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import menuDB from "./menuDB";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const Menu = () => {
	const [currentPage, setCurrentPage] = useState();
	const router = useRouter();

	useEffect(() => {
		setCurrentPage(router.pathname);
	}, [router.pathname]);

	useEffect(() => {
		console.log(currentPage);
	}, [currentPage]);

	return (
		<section className={styles.mainNavigation}>
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

{
	/* 

<div class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li id="menu-item-522" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-520 current_page_item menu-item-522"><a href="https://asheabbott.com/work/" aria-current="page">Work</a></li>
<li id="menu-item-437" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-437"><a href="https://asheabbott.com/about/">About</a></li>
</ul></div>

*/
}
