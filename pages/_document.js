import { useState, useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<Html>
			<Head />
			<body className={loaded ? "loaded" : ""}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
