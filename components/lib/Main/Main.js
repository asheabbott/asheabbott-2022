import { useRef, useEffect, useContext } from "react";
import PageContext from "../Page/PageContext";

const Main = ({ children }) => {
	const mainRef = useRef(null);
	const pageData = useContext(PageContext);

	useEffect(() => {
		const main = mainRef.current;
		const style = window.getComputedStyle(main);
		const mainMargin = parseInt(style.marginBottom);

		pageData.setMainMargin(mainMargin);
	}, []);

	return (
		<main
			ref={mainRef}
			style={{ minHeight: `calc(100vh - ${pageData.bottomSpace}px)` }}
		>
			{children}
		</main>
	);
};

export default Main;
