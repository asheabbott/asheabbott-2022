/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	async redirects() {
		return [
			{
				source: "/projects/:slug*",
				destination: "/work/:slug*",
				permanent: true,
			},
		];
	},
};
