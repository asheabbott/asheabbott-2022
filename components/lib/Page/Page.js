import { useEffect, useState } from "react";
import Head from "next/head";

import PageContext from "./PageContext";

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Page = ({ meta, home = false, children }) => {
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

	const metaTitle = `${meta.title} - Ashe Abbott DiBlasi: Senior Designer & Front-End Web Developer`;

	const metaDescription =
		"Ashe Abbott DiBlasi is a designer & front-end web developer. They’ve been creating websites for more than 17 years, contributing to all phases of the website life cycle — like discovery, strategy, user experience, design and development.";

	const ogImage = "/images/logos/pattern.png";

	return (
		<PageContext.Provider
			value={{
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
				<title>{metaTitle}</title>
				<meta
					name="description"
					content={meta.description || metaDescription}
				/>
				<meta name="keywords" content={meta.keywords} />
				<meta property="og:title" content={metaTitle} />
				<meta
					property="og:description"
					content={meta.description || metaDescription}
				/>
				<meta property="og:image" content={ogImage} />
			</Head>

			<Header />
			<Menu />
			<Main>{children}</Main>
			<Footer />
		</PageContext.Provider>
	);
};

export default Page;
