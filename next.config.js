/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
};

const redirects = async () => {
	return [
		{
			source: "/projects/:slug*",
			destination: "/work/:slug*",
			permanent: true,
		},
	];
};

module.exports = buildConfig = (_phase) => {
	const config = {
		...nextConfig,
		redirects,
	};
	return config;
};
