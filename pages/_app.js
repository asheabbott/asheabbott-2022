import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import ReactGA from "react-ga4";
import "focus-visible";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

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

ReactGA.initialize("G-1W8J7JFSZK");
ReactGA.send("pageview");

library.add(far, fas, fab);

const MyApp = ({ Component, pageProps }) => {
	const [windowLoading, setWindowLoading] = useState(true);
	const [windowLoaded, setWindowLoaded] = useState(false);
	const [routeChanging, setRouteChanging] = useState(false);
	const [routeChanged, setRouteChanged] = useState(false);
	const [video, setVideo] = useState(false);
	const [videoLoading, setVideoLoading] = useState(false);
	const [videoLoaded, setVideoLoaded] = useState(false);

	const [loading, setLoading] = useState(true);
	const [loaded, setLoaded] = useState(false);

	const router = useRouter();

	// Loader logic
	// Window load
	useEffect(() => {
		const handleWindowLoaded = () => {
			setWindowLoaded(true);
		};

		window.addEventListener("load", handleWindowLoaded);
		return () => window.removeEventListener("load", handleWindowLoaded);
	}, []);

	useEffect(() => {
		if (windowLoaded) {
			setWindowLoading(false);

			if (video) {
				if (videoLoaded) {
					setLoading(false);
					setLoaded(true);
				}
			} else {
				setLoading(false);
				setLoaded(true);
			}

			document.querySelector("body").classList.add("loaded");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [windowLoaded]);

	// Route change
	useEffect(() => {
		const handleStart = (url) => {
			setRouteChanging(true);
			setRouteChanged(false);
			setVideo(false);
			setLoading(true);
			setLoaded(false);
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
			if (video) {
				if (videoLoaded) {
					setLoading(false);
					setLoaded(true);
				}
			} else {
				setLoading(false);
				setLoaded(true);
			}
		}

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
			setVideoLoading(false);

			if (windowLoaded || routeChanged) {
				setLoading(false);
				setLoaded(true);
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
			}}
		>
			<Loader />
			<Component {...pageProps} />
		</AppContext.Provider>
	);
};

export default MyApp;
