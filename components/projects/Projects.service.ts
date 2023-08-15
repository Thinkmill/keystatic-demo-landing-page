import axios from 'axios';

export async function getProjectsLocal() {
	const resp = await axios.get('json/projects.json');
	return resp.data;
}
