import { useEffect, useState } from "react";
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
	const router = useRouter();
	const [routeChange, setRouteChange] = useState(false);
	const [loading, setLoading] = useState(true);
	const [loaded, setLoaded] = useState(false);
	const [demoLoading, setDemoLoading] = useState(false);
	const [demoLoaded, setDemoLoaded] = useState(false);

	useEffect(() => {
		window.addEventListener("load", handleLoaded);
		return () => window.removeEventListener("load", handleLoaded);
	}, []);

	useEffect(() => {
		const handleStart = (url) => {
			setRouteChange(true);
		};

		const handleComplete = (url) => {
			setRouteChange(false);
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
		if (loaded) {
			setLoading(false);
			document.querySelector("body").classList.add("loaded");
		}
	}, [loaded]);

	useEffect(() => {
		console.log(demoLoading);
	}, [demoLoading]);

	// useEffect(() => {
	// 	if (demoLoaded) {
	// 		setDemoLoading(false);
	// 	}
	// }, [demoLoaded]);

	const handleLoaded = () => {
		setLoaded(true);
	};

	return (
		<AppContext.Provider
			value={{
				routeChange,
				loading,
				demoLoading,
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
