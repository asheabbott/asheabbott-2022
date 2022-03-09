const path = "/images/projects";

const beyondDefinition = "Beyond Definition (formerly Bates Creative)";

// TO DO: 301 redirects from /projects/project-name to /work/project-name

const projectsDB = [
	{
		id: 1,
		name: "Transurban’s Express Lanes Website",
		slug: "transurban-express-lanes-website",
		description:
			"Agency contracts prevent me from writing anything about this project. You'll find some details and samples on this page and links to the live site and agency's case study below.",
		buttons: [
			{
				text: "Visit Website",
				url: "https://expresslanes.com",
				target: "_blank",
			},
			{
				text: "Read Case Study",
				url: "https://beyond-definition.com/case_studies/transurban",
				target: "_blank",
			},
		],
		technical: "Drupal Website",
		contributions: [
			"Website Strategy",
			"Information Architecture",
			"Usability Testing",
			"User Experience Design",
			"Website Accessibility",
			"Website Design",
			"Front-End Development",
		],
		awards: ["Communicator Awards", "Award of Distinction"],
		agency: beyondDefinition,
		video: "363687724",
		thumbnail: `${path}/transurban/transurban-thumbnail.jpg`,
		screenshots: [
			`${path}/transurban/transurban-mockup-1.jpg`,
			`${path}/transurban/transurban-mockup-2.jpg`,
		],
	},
	{
		id: 2,
		name: "Carol Highsmith’s America Website",
		slug: "carol-highsmith-america-website",
		description:
			"Carol's work. This content is followed by a gallery of select photographs from Carol's enormous collection. The supporting content on the website offers visitors a glimpse of Carol's life and her truly sparkling personality.",
		buttons: [
			{
				text: "Visit Website",
				url: "http://carolhighsmithamerica.com",
				target: "_blank",
			},
		],
		technical: "WordPress Website",
		contributions: [
			"User Experience Design",
			"Front-End Development",
			"WordPress Development",
		],
		awards: [
			"W3 Awards, Best in Show",
			"W3 Awards, Gold",
			"W3 Awards, Gold",
			"W3 Awards, Silver",
			"GDUSA American Graphic Design Awards",
		],
		agency: beyondDefinition,
		video: "363687772",
		thumbnail: `${path}/carol-highsmith/carol-highsmith-thumbnail.jpg`,
		screenshots: [
			`${path}/carol-highsmith/carol-highsmith-mockup-1.jpg`,
			`${path}/carol-highsmith/carol-highsmith-mockup-2.jpg`,
		],
	},
	{
		id: 3,
		name: "Air Force Association’s Website",
		slug: "air-force-association-website",
		description:
			"The Air Force Association (AFA) is a professional military and aerospace education association whose mission is “to promote a dominant United States Air Force and a strong national defense and to honor Airmen and [their] Air Force Heritage.” The project team created a new website for the organization, with focus on strategy, visual impact and user experience. The resulting website utilizes AFA’s bold blue and yellow color palette, selective homepage content and strategic information architecture and user experience to draw visitors into and help them easily navigate the site. For more information, please visit the agency’s case study via the link below.",
		buttons: [
			{
				text: "Visit Website",
				url: "https://www.afa.org",
				target: "_blank",
			},
			{
				text: "Read Case Study",
				url: "https://beyond-definition.com/case_studies/air-force-association-website-redesign",
				target: "_blank",
			},
		],
		technical: "Adobe Experience Manager Website",
		contributions: [
			"Website Strategy",
			"Information Architecture",
			"User Experience Design",
			"Website Design",
			"Front-End Development",
		],
		awards: [
			"Communicator Awards, Award of Excellence",
			"AM&P Excel Awards, Bronze",
		],
		agency: beyondDefinition,
		video: null,
		thumbnail: `${path}/afa/air-force-association-thumbnail.jpg`,
		screenshots: [
			`${path}/afa/air-force-association-mockup-1.jpg`,
			`${path}/afa/air-force-association-mockup-2.jpg`,
		],
	},
	{
		id: 4,
		name: "World Food Program USA’s Website",
		slug: "world-food-program-usa-website",
		description:
			"Agency contracts prevent me from writing anything about this project. You’ll find some details and samples on this page and a link to the live site below.",
		buttons: [
			{
				text: "Visit Website",
				url: "https://www.wfpusa.org",
				target: "_blank",
			},
		],
		technical: "WordPress Website",
		contributions: ["Website Strategy", "User Experience Design"],
		awards: null,
		agency: beyondDefinition,
		video: "363687804",
		thumbnail: `${path}/wfp/world-food-program-usa-thumbnail.jpg`,
		screenshots: [
			`${path}/wfp/world-food-program-usa-mockup-1.jpg`,
			`${path}/wfp/world-food-program-usa-mockup-2.jpg`,
		],
	},
	{
		id: 5,
		name: "American Risk and Insurance Association’s Website",
		slug: "american-risk-and-insurance-associations-website",
		description:
			"The American Risk and Insurance Association (ARIA) works to study and promote the knowledge of risk management and insurance. They have “a long tradition of supporting and educating professionals, scholars, and students in the insurance and risk management industry.” ARIA needed a new website that would successfully present their updated brand, educate visitors about the organization, showcase articles from their two Wiley Online Library-hosted journals and offer event information and archives in a user-friendly manner. The project team created an inviting and informative website that is easy for both visitors and authors to use.",
		buttons: [
			{
				text: "Visit Website",
				url: "http://www.aria.org",
				target: "_blank",
			},
		],
		technical: "WordPress Website",
		contributions: [
			"Website Strategy",
			"Information Architecture",
			"User Experience Design",
			"Website Accessibility",
			"Website Design",
			"Front-End Development",
			"WordPress Development",
		],
		awards: null,
		agency: beyondDefinition,
		video: "363687826",
		thumbnail: `${path}/aria/aria-thumbnail.jpg`,
		screenshots: [
			`${path}/aria/aria-mockup-1.jpg`,
			`${path}/aria/aria-mockup-2.jpg`,
		],
	},
	{
		id: 6,
		name: "Military Officers Association of America’s Website",
		slug: "military-officers-association-of-america-website",
		description:
			"With more than 350,000 members, the Military Officers Association of America (MOAA) is \"the nation's largest and most influential association of military officers.\" The project team worked with MOAA to create a new website that would increase the visibility and consistency of the organization's brand, improve the overall experience for their website visitors and showcase the wealth of information available on the website. For more information, please visit the agency's case study via the link below",
		buttons: [
			{
				text: "Visit Website",
				url: "https://www.moaa.org",
				target: "_blank",
			},
			{
				text: "Read Case Study",
				url: "https://beyond-definition.com/case_studies/moaa-website-redesign",
				target: "_blank",
			},
		],
		technical: "Episerver Website",
		contributions: [
			"Website Strategy",
			"Information Architecture",
			"User Experience Design",
			"Website Accessibility",
			"Website Design",
			"Email Design",
		],
		awards: ["Communicator Awards, Award of Excellence"],
		agency: beyondDefinition,
		video: "372482869",
		thumbnail: `${path}/moaa/moaa-thumbnail.jpg`,
		screenshots: [
			`${path}/moaa/moaa-mockup-1.jpg`,
			`${path}/moaa/moaa-mockup-2.jpg`,
		],
	},
	{
		id: 7,
		name: "Unisys’s Linesight Product Information Experience",
		slug: "unisys-linesight-product-information-web-experience",
		description:
			"Unisys is a global information technology company that provides world-renowned software, services and technology. Unisys needed a sales demo for their Linesight product that would be interesting, interactive and informative. The project team created a tablet-focused product information web experience with friendly illustrations and extensive jQuery.",
		buttons: [
			{
				text: "Visit Website",
				url: "https://www.unisys.com/linesight-demo",
				target: "_blank",
			},
		],
		technical: "Static Website",
		contributions: ["Front-End Development"],
		awards: null,
		agency: beyondDefinition,
		video: "363687847",
		thumbnail: `${path}/unisys/unisys-linesight-thumbnail.jpg`,
		screenshots: [
			`${path}/unisys/unisys-linesight-mockup-1.jpg`,
			`${path}/unisys/unisys-linesight-mockup-2.jpg`,
		],
	},
	{
		id: 8,
		name: "Bates Creative’s Website",
		slug: "bates-creative-website",
		description:
			"Bates Creative — which evolved into Beyond Definition — was a creative agency that “deliver[ed] creative digital, branding and print change with Artistic Intelligence — a keen eye for strategic insight and impactful design.” Bates Creative wanted to build a new website that would showcase the agency’s personality and expertise. I was fortunate to have the opportunity to bring this edgy design to life as a custom and complex WordPress theme with extensive homepage animations.",
		buttons: null,
		technical: "WordPress Website",
		contributions: [
			"Website Strategy",
			"User Experience Design",
			"Front-End Development",
			"WordPress Development",
			"Email Development",
			"HubSpot Development",
		],
		awards: ["W3 Awards, Silver", "AIGA 50"],
		agency: beyondDefinition,
		video: "363687856",
		thumbnail: `${path}/bates-creative/bates-creative-thumbnail.jpg`,
		screenshots: [
			`${path}/bates-creative/bates-creative-mockup-1.jpg`,
			`${path}/bates-creative/bates-creative-mockup-2.jpg`,
		],
	},
];

export default projectsDB;
