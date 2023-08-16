export interface IProjectData {
	id: number;
	type: string;
	name: string;
	location?: string;
	address?: string;
	images?: string[];
	financials: {[key: number]: string;};
	features: string[];
	success: string[];
}
