import { useRef, useEffect } from "react";

const Main = ({ setMainMargin, children }) => {
	const mainRef = useRef(null);

	useEffect(() => {
		const main = mainRef.current;
		const style = window.getComputedStyle(main);
		const mainMargin = parseInt(style.marginBottom);

		setMainMargin(mainMargin);
	}, []);

	return <main ref={mainRef}>{children}</main>;
};

export default Main;
