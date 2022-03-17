import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(far, fas, fab);

import Loader from "../components/components/Loader/Loader";

import "../styles/accessibility.scss";
import "../styles/buttons.scss";
import "../styles/font-face.scss";
import "../styles/global.scss";
import "../styles/images.scss";
import "../styles/mixins.scss";
import "../styles/navigation-main.scss";
import "../styles/reset.scss";
import "../styles/svg.scss";
import "../styles/typography.scss";
import "../styles/video.scss";

const MyApp = ({ Component, pageProps }) => {
	const router = useRouter();
	const [routeChange, setRouteChange] = useState(false);
	const [loading, setLoading] = useState(true);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		window.addEventListener("load", handleLoaded);
		return () => window.removeEventListener("load", handleLoaded);
	}, []);

	useEffect(() => {
		router.events.on("routeChangeStart", (url) => {
			setRouteChange(true);
		});

		router.events.on("routeChangeComplete", (url) => {
			setRouteChange(false);
		});

		router.events.on("routeChangeError", (url) => {
			setRouteChange(false);
		});
	}, [router]);

	useEffect(() => {
		if (loaded) {
			setLoading(false);
			document.querySelector("body").classList.add("loaded");
		}
	}, [loaded]);

	const handleLoaded = () => {
		setLoaded(true);
	};

	return (
		<>
			<Loader loading={loading} routeChange={routeChange} />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
