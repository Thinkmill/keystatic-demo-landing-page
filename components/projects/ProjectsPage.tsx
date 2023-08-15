import './ProjectsPage.scss';

import Projects from './components/Projects/Projects';

const ProjectsPage = () => {
	return (
		<div id="portfolio">
			<h2>Projects</h2>

			<div className="content">
				<Projects />
			</div>
		</div>
	)
}

export default ProjectsPage;
