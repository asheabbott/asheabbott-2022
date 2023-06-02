import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
// import ReactGA from "react-ga4";
import "focus-visible";

import AppContext from "../components/components/App/AppContext";

import Loader from "../components/components/Loader/Loader";

import "../styles/accessibility.scss";
import "../styles/buttons.scss";
import "../styles/font-face.scss";
import "../styles/global.scss";
import "../styles/images.scss";
import "../styles/mixins.scss";
import "../styles/navigation-main.scss";
import "../styles/reset.scss";
import "../styles/typography.scss";
import "../styles/video.scss";

const MyApp = ({ Component, pageProps }) => {
	const [loading, setLoading] = useState(true);
	const [windowLoaded, setWindowLoaded] = useState(false);
	const [routeChanged, setRouteChanged] = useState(false);
	const [video, setVideo] = useState(false);
	const [videoLoading, setVideoLoading] = useState(false);
	const [videoLoaded, setVideoLoaded] = useState(false);
	const [pageMeta, setPageMeta] = useState({
		title: "Ashe Abbott DiBlasi: Senior Designer & Front-End Web Developer",
		description:
			"Ashe Abbott DiBlasi is a designer & front-end web developer. They’ve been creating websites for more than 17 years, contributing to all phases of the website life cycle — like discovery, strategy, user experience, design and development.",
		image: "https://asheabbott.com/images/logos/pattern.png",
		keywords: "",
	});

	const router = useRouter();

	// ReactGA.initialize("G-1W8J7JFSZK");
	// ReactGA.send("pageview");

	// Loader logic
	// Window load
	useEffect(() => {
		const handleWindowLoaded = () => {
			setWindowLoaded(true);
		};

		if (document.readyState === "complete") {
			handleWindowLoaded();
		} else {
			window.addEventListener("load", handleWindowLoaded);
			return () => window.removeEventListener("load", handleWindowLoaded);
		}
	}, []);

	useEffect(() => {
		if (windowLoaded) {
			if (video) {
				if (videoLoaded) {
					setLoading(false);
				}
			} else {
				setLoading(false);
			}

			document.querySelector("body").classList.remove("loading");
			document.querySelector("body").classList.add("loaded");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [windowLoaded]);

	// Route change
	useEffect(() => {
		const handleStart = (url) => {
			setRouteChanged(false);
			setVideo(false);
			setLoading(true);

			document.querySelector("body").classList.remove("loaded");
			document.querySelector("body").classList.add("loading");
		};

		const handleComplete = (url) => {
			setRouteChanged(true);
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	}, [router.events]);

	useEffect(() => {
		if (routeChanged) {
			if (video) {
				if (videoLoaded) {
					setLoading(false);
				}
			} else {
				setLoading(false);
			}
		}

		document.querySelector("body").classList.remove("loading");
		document.querySelector("body").classList.add("loaded");

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [routeChanged]);

	// Video load
	useEffect(() => {
		if (video) {
			setVideoLoading(true);
		}
	}, [video]);

	useEffect(() => {
		if (videoLoaded) {
			if (windowLoaded || routeChanged) {
				setLoading(false);
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [videoLoaded]);

	return (
		<AppContext.Provider
			value={{
				setVideo,
				setVideoLoaded,
				loading,
				setPageMeta,
			}}
		>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/images/icons/favicon-96x96.png" key="favicon" />
				<title>{pageMeta.title}</title>
				<meta name="description" content={pageMeta.description} />
				<meta name="keywords" content={pageMeta.keywords} />
				<meta property="og:title" content={pageMeta.title} />
				<meta property="og:description" content={pageMeta.description} />
				<meta property="og:image" content={pageMeta.image} />
			</Head>
			{loading ? <Loader /> : <Component {...pageProps} />}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-1W8J7JFSZK"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-1W8J7JFSZK');
        `}
			</Script>
		</AppContext.Provider>
	);
};

export default MyApp;
