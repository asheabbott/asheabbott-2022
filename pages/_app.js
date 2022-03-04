import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(far, fas, fab);

import "../styles/accessibility.scss";
import "../styles/buttons.scss";
import "../styles/font-face.scss";
import "../styles/global.scss";
import "../styles/images.scss";
import "../styles/loading.scss";
import "../styles/mixins.scss";
import "../styles/navigation-main.scss";
import "../styles/project.scss";
import "../styles/reset.scss";
import "../styles/svg.scss";
import "../styles/typography.scss";
import "../styles/video.scss";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
