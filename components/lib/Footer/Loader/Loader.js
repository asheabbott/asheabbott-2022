import { useState, useContext } from "react";
import Image from "next/image";
import PageContext from "../../Page/PageContext";
import styles from "./Loader.module.scss";

const Loader = () => {
	const [transitionEnd, setTransitionEnd] = useState(false);
	const pageData = useContext(PageContext);

	let fadeClass = "";

	if (pageData.loaded) {
		if (transitionEnd) {
			fadeClass = "fade-end";
		} else {
			fadeClass = "fade-out";
		}
	}

	return (
		<div
			className={`${styles.loading} ${fadeClass}`}
			onTransitionEnd={() => {
				setTransitionEnd(true);
			}}
		>
			<div className={styles.loadingIcon}>
				<div className={styles.letterA}>
					<div className={styles.imageWrap}>
						<Image
							src="/images/loader/loading-screen-a.svg"
							width={96}
							height={92}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.letterS}>
					<div className={styles.imageWrap}>
						<Image
							src="/images/loader/loading-screen-s.svg"
							width={72}
							height={95}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.letterH}>
					<div className={styles.imageWrap}>
						<Image
							src="/images/loader/loading-screen-h.svg"
							width={86}
							height={92}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.letterE}>
					<div className={styles.imageWrap}>
						<Image
							src="/images/loader/loading-screen-e.svg"
							width={57}
							height={92}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
