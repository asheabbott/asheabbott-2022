const significantSkills = [
	{
		title: "Significant Experience",
		description:
			"Things I do regularly, have likely done for a long time and know well.",
		skillGroups: [
			{
				group: "Expertise",
				skills: [
					"Website Strategy",
					"User Experience Design",
					"Website Design",
					"Front-End Development",
					"WordPress Development",
				],
			},
			{
				group: "Code",
				skills: ["HTML5", "CSS3", "Sass", "JavaScript ES5", "jQuery"],
			},
			{
				group: "Code Editors",
				skills: ["Visual Studio Code"],
			},
			{
				group: "CMS Platforms",
				skills: ["WordPress"],
			},
			{
				group: "Tools",
				skills: [
					"Google DevTools",
					"Google Lighthouse",
					"BrowserStack",
					"MAMP",
				],
			},
			{
				group: "Software",
				skills: ["Adobe XD", "Adobe Illustrator"],
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
					"Information Architecture",
					"Website Accessibility",
					"App Design",
					"Email Design",
					"Email Development",
					"Twixl Development",
					"HubSpot Development",
				],
			},
			{
				group: "Code",
				skills: [
					"JavaScript ES6",
					"React",
					"Gulp",
					"Bootstrap",
					"Git",
					"GitHub",
				],
			},
			{
				group: "Code Editors",
				skills: ["Sublime Text 3"],
			},
			{
				group: "Services",
				skills: ["Twixl", "Mailchimp", "HubSpot"],
			},
			{
				group: "Software",
				skills: ["Adobe Photoshop"],
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
				skills: ["Usability Testing"],
			},
			{
				group: "Code",
				skills: [
					"React Native",
					"Redux",
					"Webpack",
					"Babel",
					"GitLab",
					"Meteor",
				],
			},
			{
				group: "Code Editors",
				skills: ["Atom"],
			},
			{
				group: "Tools",
				skills: ["Jira"],
			},
			{
				group: "Software",
				skills: ["Sketch", "GIMP"],
			},
		],
	},
];

const skillsDB = [...significantSkills, ...moderateSkills, ...limitedSkills];

export default skillsDB;
