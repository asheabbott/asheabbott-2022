import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import styles from "./Loader.module.scss";

const Loader = ({ routeChangeStart, routeChangeComplete, loading, loaded }) => {
	return (
		<div
			className={`${styles.loader} ${
				loading || routeChangeStart
					? styles.loading
					: loaded || routeChangeComplete
					? styles.loaded
					: ""
			}`}
		>
			<div className={styles.loaderIcon}>
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
