import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(far, fas, fab);

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
	const [windowLoading, setWindowLoading] = useState(true);
	const [windowLoaded, setWindowLoaded] = useState(false);
	const [routeChanging, setRouteChanging] = useState(false);
	const [routeChanged, setRouteChanged] = useState(false);
	const [demoLoading, setDemoLoading] = useState(false);
	const [demoLoaded, setDemoLoaded] = useState(false);

	const [loading, setLoading] = useState(true);
	const [loaded, setLoaded] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const handleWindowLoaded = () => {
			setWindowLoaded(true);
		};

		window.addEventListener("load", handleWindowLoaded);
		return () => window.removeEventListener("load", handleWindowLoaded);
	});

	useEffect(() => {
		if (windowLoaded) {
			setWindowLoading(false);
			document.querySelector("body").classList.add("loaded");

			console.log("window loaded");
		}
	}, [windowLoaded]);

	useEffect(() => {
		const handleStart = (url) => {
			setRouteChanging(true);
			setRouteChanged(false);
		};

		const handleComplete = (url) => {
			setRouteChanging(false);
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
			console.log("route changed");
		}
	}, [routeChanged]);

	// Load and route change are working; demo load is unreliable currently.

	useEffect(() => {
		if (demoLoading) {
			console.log("demo loading");
		}

		console.log(`Demo loading: ${demoLoading}`);
		console.log(`Demo loaded: ${demoLoaded}`);
	}, [demoLoading]);

	useEffect(() => {
		if (demoLoaded) {
			setDemoLoading(false);
			console.log("demo loaded");
		}

		console.log(`Demo loading: ${demoLoading}`);
		console.log(`Demo loaded: ${demoLoaded}`);
	}, [demoLoaded]);

	return (
		<AppContext.Provider
			value={{
				// routeChanging,
				// windowLoading,
				// // setDemo,
				// demoLoading,
				setDemoLoading,
				setDemoLoaded,
			}}
		>
			<Loader />
			<Component {...pageProps} />
		</AppContext.Provider>
	);
};

export default MyApp;
