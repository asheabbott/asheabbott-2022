const Demo = ({ project }) => {
	return (
		<section className="website-demo">
			<div className="container">
				<div className="video">
					<iframe
						src={`https://player.vimeo.com/video/${project.video}?background=1`}
						width="640"
						height="360"
						frameBorder="0"
						allow="autoplay; fullscreen; picture-in-picture"
						allowFullScreen
						title="Website demo of <?php echo get_the_title(); ?>"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Demo;
