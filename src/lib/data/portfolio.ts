/**
 * =====================================================================
 * MODULAR RESUME & PORTFOLIO DATA
 * =====================================================================
 * Update your information, projects, skills, education, and references here.
 */

export interface ContactLink {
	label: string;
	url: string;
	display?: string;
	external?: boolean;
}

export interface EducationItem {
	degree: string;
	institution: string;
	period: string;
	cgpa: string;
	details?: string[];
}

export interface ProjectItem {
	title: string;
	role: string;
	period: string;
	bullets: string[];
	link?: {
		url: string;
		label: string;
	};
	technologies?: string[];
}

export interface SkillCategory {
	category: string;
	items: string[];
	description?: string;
}

export interface ReferenceItem {
	name: string;
	title: string;
	department?: string;
	institution: string;
	location: string;
	phone: string;
	emails: string[];
}

export interface Portfolio {
	name: string;
	title: string;
	location: string;
	phone: string;
	email: string;
	links: ContactLink[];
	about: string;
	education: EducationItem[];
	projects: ProjectItem[];
	skills: SkillCategory[];
	references: ReferenceItem[];
}

export const portfolio: Portfolio = {
	name: 'Khalid Muntasir Sawad',
	title: 'Statistician & Software Developer',
	location: 'Rajshahi, Bangladesh',
	phone: '+880 1761 432578',
	email: 'kmuntasirsawad@gmail.com',
	links: [
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/khalid-s-2a489412a/', external: true },
		{ label: 'GitHub', url: 'https://github.com/chromaticv1', external: true },
		{ label: 'Resume (PDF)', url: '/resume.pdf', external: true }
	],
	about:
		'Aspiring statistician interested in computer programming, science and mathematics with a strong foundation on Python and R. I started programming with Python in my school life and made video games and websites as a hobby. Just like most people in their 20’s, I want to make a difference in the world.',
	education: [
		{
			degree: 'Bachelor of Science in Statistics',
			institution: 'University of Rajshahi',
			period: 'DECEMBER 2022 – ONGOING',
			cgpa: 'Current CGPA: 3.51'
		}
	],
	projects: [
		{
			title: 'FlexAutoDock',
			role: 'Backend',
			period: 'DECEMBER 2024 – PRESENT',
			bullets: [
				'Created the backend using FastAPI, Celery, RabbitMQ for a molecular docking platform.',
				'Collected data from over multiple compound databases.',
				'Designed web scrapers and analysis tools utilizing Python, R, and Google Looker Studio.'
			],
			link: {
				url:'https://doi.org/10.64898/2026.08.11.744098',
				label: 'Paper link'
			},
			technologies: ['FastAPI', 'Celery', 'RabbitMQ', 'Python', 'R', 'Google Looker Studio']
		},
		{
			title: 'Vegiehat',
			role: 'Volunteer',
			period: 'DECEMBER 2024 – PRESENT',
			bullets: [
				'Contributed to the development of a platform that aggregates and showcases analysis of consumer food prices, assisting individuals in making informed purchasing choices.',
				'Designed web scrapers and analysis tools utilizing Python, R, and Google Looker Studio.'
			],
			link: {
				url: 'https://vegiehat.org',
				label: 'vegiehat.org'
			},
			technologies: ['Python', 'R', 'Google Looker Studio', 'Web Scraping']
		},
		{
			title: 'SSB (Steam Store Bangladesh)',
			role: 'Graphics Designer',
			period: 'MARCH 2021 – 2026',
			bullets: [
				'Created a range of visually appealing graphics to promote an online video game resale store, while working synchronously with the marketing team.'
			],
			link: {
				url: 'https://steamstorebd.com',
				label: 'Store page'
			},
			technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender']
		}
	],
	skills: [
		{
			category: 'Python Programming',
			items: [
				'Experienced in data science frameworks: pandas, scikit-learn, matplotlib, etc.',
				'Experienced in web development frameworks: FastAPI, Flask, Celery.'
			]
		},
		{
			category: 'Other Programming',
			items: ['Experienced in R.', 'Experienced in bash scripting.']
		},
		{
			category: 'Graphics & 3D',
			items: ['Over a decade of experience in Adobe Photoshop, Illustrator and Blender.']
		}
	],
	references: [
		{
			name: 'Dr. Md. Aminul Hoque',
			title: 'Professor',
			department: 'Department of Statistics',
			institution: 'University of Rajshahi',
			location: 'Rajshahi-6205, Bangladesh',
			phone: '+880 1715 361973',
			emails: ['aminul@ru.ac.bd', 'mdaminulh@gmail.com']
		},
		{
			name: 'Dr. Md. Rezaul Karim',
			title: 'Professor',
			department: 'Department of Statistics',
			institution: 'University of Rajshahi',
			location: 'Rajshahi-6205, Bangladesh',
			phone: '+880 1726 433752',
			emails: ['mrkarim@ru.ac.bd', 'mrezakarim@yahoo.com']
		},
		{
			name: 'Md. Danial Dirar',
			title: 'CEO',
			department: 'Executive Leadership',
			institution: 'Steam Store Bangladesh - SSB',
			location: 'Bangladesh',
			phone: '+88 01818 843999',
			emails: ['ceo@steamstorebd.com', 'steamstorebd@gmail.com']
		}
	]
};

export const portfolioData = portfolio;
