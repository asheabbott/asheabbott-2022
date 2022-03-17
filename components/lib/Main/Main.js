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
	}, [pageData]);

	const dynamicStyles = {
		main: {
			transform: pageData.menuOpen ? "translateY(100vh)" : "translateY(0)",
			minHeight: `calc(100vh - ${pageData.bottomSpace}px)`,
		},
	};

	return (
		<main ref={mainRef} style={dynamicStyles.main}>
			{children}
		</main>
	);
};

export default Main;
