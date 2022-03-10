import { useEffect, useState } from "react";
import Head from "next/head";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Page = ({ meta, children }) => {
	const [topSpace, setTopSpace] = useState(null);
	const [mainMargin, setMainMargin] = useState(null);
	const [footerBufferHeight, setFooterBufferHeight] = useState(null);
	const [bottomSpace, setBottomSpace] = useState(null);

	useEffect(() => {
		setBottomSpace(mainMargin + footerBufferHeight);
	}, []);

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<meta name="keywords" content={meta.keywords} />
			</Head>

			<Header setTopSpace={setTopSpace} />
			<Main setMainMargin={setMainMargin}>{children}</Main>
			<Footer setFooterBufferHeight={setFooterBufferHeight} />
		</>
	);
};

export default Page;
