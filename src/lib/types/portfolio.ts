export interface SocialLink {
	name: string;
	url: string;
	icon: string;
	handle?: string;
}

export interface PersonalInfo {
	name: string;
	title: string;
	subtitle: string;
	bio: string;
	aboutNarrative: string[];
	location: string;
	phone: string;
	email: string;
	status: string;
	availableForHire: boolean;
	resumeUrl: string;
	socials: {
		github: SocialLink;
		linkedin: SocialLink;
		email: SocialLink;
		phone: SocialLink;
	};
}

export interface QuickStat {
	label: string;
	value: string;
	description: string;
	icon?: string;
}

export interface Education {
	degree: string;
	institution: string;
	location: string;
	period: string;
	status: string;
	cgpa: string;
	scale: string;
	highlights: string[];
}

export interface Experience {
	id: string;
	role: string;
	company: string;
	companyUrl?: string;
	location: string;
	period: string;
	badge?: string;
	bullets: string[];
	technologies: string[];
	category: 'research' | 'volunteer' | 'industry' | 'design';
	featured?: boolean;
}

export interface Project {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	longDescription?: string;
	role: string;
	period: string;
	category: 'research' | 'data' | 'backend' | 'design' | 'web';
	technologies: string[];
	highlights: string[];
	links?: {
		live?: string;
		github?: string;
		demo?: string;
		label?: string;
	};
	featured?: boolean;
	image?: string;
	metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
	name: string;
	description: string;
	icon: string;
	accentColor: string;
	skills: {
		name: string;
		level?: string;
		experience?: string;
		keywords?: string[];
	}[];
}

export interface Reference {
	id: string;
	name: string;
	title: string;
	department: string;
	institution: string;
	location: string;
	phone: string;
	emails: string[];
	relationship?: string;
}

export interface PortfolioData {
	personal: PersonalInfo;
	stats: QuickStat[];
	education: Education[];
	experiences: Experience[];
	projects: Project[];
	skillCategories: SkillCategory[];
	references: Reference[];
	interests: string[];
}
