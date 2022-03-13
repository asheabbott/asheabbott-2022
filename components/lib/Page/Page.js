import { useEffect, useState } from "react";
import Head from "next/head";

import PageContext from "./PageContext";

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Page = ({ meta, home = false, children }) => {
	const [loaded, setLoaded] = useState(false);
	const [topSpace, setTopSpace] = useState(null);
	const [homeLogoBufferH, setHomeLogoBufferH] = useState(null);
	const [mainMargin, setMainMargin] = useState(null);
	const [footerBufferHeight, setFooterBufferHeight] = useState(null);
	const [bottomSpace, setBottomSpace] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [scrollTop, setScrollTop] = useState(null);

	useEffect(() => {
		setBottomSpace(mainMargin + footerBufferHeight);
	}, [mainMargin, footerBufferHeight]);

	useEffect(() => {
		if (home) {
			window.addEventListener("scroll", handleScroll, { passive: true });
			return () => window.removeEventListener("scroll", handleScroll);
		}
	});

	const handleScroll = () => {
		setScroll(true);
		setScrollTop(document.body.scrollTop || document.documentElement.scrollTop);
	};

	return (
		<PageContext.Provider
			value={{
				loaded,
				setLoaded,
				topSpace,
				setTopSpace,
				homeLogoBufferH,
				setHomeLogoBufferH,
				mainMargin,
				setMainMargin,
				footerBufferHeight,
				setFooterBufferHeight,
				bottomSpace,
				setBottomSpace,
				menuOpen,
				setMenuOpen,
				scroll,
				setScroll,
				scrollTop,
				setScrollTop,
				home,
			}}
		>
			<Head>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<meta name="keywords" content={meta.keywords} />
			</Head>

			<Header />
			<Menu />
			<Main>{children}</Main>
			<Footer />
		</PageContext.Provider>
	);
};

export default Page;
