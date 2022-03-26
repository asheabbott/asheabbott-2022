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
						src={`https://player.vimeo.com/video/${project.video.number}?background=1`}
						width="640"
						height="360"
						frameBorder="0"
						allow="autoplay; fullscreen; picture-in-picture"
						allowFullScreen
						title={`Website demo of ${project.name}`}
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
