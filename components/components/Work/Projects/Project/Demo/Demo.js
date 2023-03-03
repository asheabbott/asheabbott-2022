import { useContext, useEffect } from "react";
import AppContext from "../../../../App/AppContext";

const Demo = ({ project }) => {
	const appData = useContext(AppContext);

	useEffect(() => {
		appData.setVideo(true);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="website-demo">
			<div className="container">
				<div className="video" style={{ backgroundColor: project.video.color }}>
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${project.video.number}?autoplay=1&controls=0&loop=1&mute=1&playlist=${project.video.number}&rel=0`}
						title={`Website demo of ${project.name}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						onLoad={() => {
							appData.setVideoLoaded(true);
						}}
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Demo;
