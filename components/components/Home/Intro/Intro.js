import Button from "../../../lib/Button/Button";

const Intro = () => {
	return (
		<section className="intro">
			<div className="container">
				<p>
					Throughout my career, I’ve had the opportunity to work with many{" "}
					<strong>fabulous brands</strong> — including Air Force Association,
					Amanda de Cadenet, Amber Valetta, American Marketing Association,
					American Psychiatric Association, Architect of the Capitol, Arms
					Control Association, Carol Highsmith, Cisco, Engine 2, Express Lanes,
					ExxonMobil, Garfinkel + Associates, Heather Catania, John Pierre,
					Lifetime’s The Conversation, Nailtiques, Platform PR, SD Management,
					Society of Women Engineers, Unisys, What’s Contemporary, World Food
					Program USA, YMCA and more.
				</p>
				<Button text="See My Work" href="/work" />
				<Button text="Learn About Me" href="/about" />
			</div>
		</section>
	);
};

export default Intro;
