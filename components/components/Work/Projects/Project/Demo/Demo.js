import { useContext, useEffect } from "react";
import AppContext from "../../../../App/AppContext";

const Demo = ({ project }) => {
	const appData = useContext(AppContext);

	useEffect(() => {
		appData.setDemoLoading(true);
	}, [appData]);

	return (
		<section className="website-demo">
			<div className="container">
				<div
					className="video"
					// style={{ backgroundColor: project.video.color || "#fff" }}
				>
					<iframe
						src={`https://player.vimeo.com/video/${project.video.number}?background=1`}
						width="640"
						height="360"
						frameBorder="0"
						allow="autoplay; fullscreen; picture-in-picture"
						allowFullScreen
						title="Website demo of <?php echo get_the_title(); ?>"
						onLoad={() => {
							console.log("demo loaded");
							// appData.setDemoLoading(false);
							appData.setDemoLoaded(true);
						}}
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Demo;
