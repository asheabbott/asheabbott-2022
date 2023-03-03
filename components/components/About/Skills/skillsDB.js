const significantSkills = [
	{
		title: "Significant Experience",
		description:
			"Things I do regularly or have done for a long time and know well.",
		skillGroups: [
			{
				group: "Expertise",
				skills: [
					"Front-End Development",
					"User Experience Design",
					"Website Design",
					"Website Strategy",
					"WordPress Development",
				],
			},
			{
				group: "CMS Platforms",
				skills: ["WordPress"],
			},
			{
				group: "Code",
				skills: [
					"CSS3",
					"HTML5",
					"JavaScript (ES5, ES6)",
					"jQuery",
					"React",
					"Sass",
				],
			},
			{
				group: "Code Editors",
				skills: ["Visual Studio Code"],
			},
			{
				group: "Software",
				skills: ["Adobe Illustrator", "Adobe XD", "Affinity Designer"],
			},
			{
				group: "Tools",
				skills: ["Google DevTools", "Google Lighthouse", "MAMP"],
			},
		],
	},
];

const moderateSkills = [
	{
		title: "Moderate Experience",
		description:
			"Things I've done often over the past few years. Or things I used to know well, but haven't done much recently.",
		skillGroups: [
			{
				group: "Expertise",
				skills: [
					"App Design",
					"Email Design",
					"Email Development",
					"Information Architecture",
					"Website Accessibility",
				],
			},
			{
				group: "Code",
				skills: [
					"Bootstrap",
					"Git",
					"GitHub",
					"GitLab",
					"Gulp",
					"Meteor",
					"Next.js",
				],
			},
			{
				group: "Software",
				skills: ["Adobe Photoshop", "Affinity Photo"],
			},
			{
				group: "Tools",
				skills: ["BrowserStack", "Jira"],
			},
		],
	},
];

const limitedSkills = [
	{
		title: "Limited Experience",
		description: "Things I'm learning. Or things I haven't done in a while.",
		skillGroups: [
			{
				group: "Expertise",
				skills: [
					"HubSpot Development",
					"Twixl Development",
					"Usability Testing",
				],
			},
			{
				group: "Code",
				skills: ["Babel", "React Native", "Redux", "Webpack"],
			},
			{
				group: "Code Editors",
				skills: ["Atom", "Sublime Text 3"],
			},
			{
				group: "Services",
				skills: ["HubSpot", "Mailchimp", "Twixl"],
			},
			{
				group: "Software",
				skills: ["GIMP", "Sketch"],
			},
		],
	},
];

const skillsDB = [...significantSkills, ...moderateSkills, ...limitedSkills];

export default skillsDB;
