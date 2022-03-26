import { useContext } from "react";
import Image from "next/image";
import AppContext from "../App/AppContext";
import styles from "./Loader.module.scss";

const Loader = () => {
	const appData = useContext(AppContext);

	return (
		<div
			className={`${styles.loader} ${appData.loading ? styles.loading : ""}`}
		>
			<div className={styles.loaderIcon}>
				<div className={styles.letterA}>
					<div className={styles.imageWrap}>
						<Image
							src="/images/loader/loading-screen-a.svg"
							width={96}
							height={92}
							alt=""
							priority
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
							priority
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
							priority
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
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
