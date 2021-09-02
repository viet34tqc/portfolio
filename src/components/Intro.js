import Link from "next/link";

const Intro = () => {
	return (
		<section className="intro">
			<div className="container">
				<div className="intro__left">
					<p className="intro__greeting">Hi, I'm Viet Nguyen</p>
					<p>a web developer and freelancer</p>
				</div>
				<div className="intro__right">
					<p>I'm a developer based in Ha Noi, Viet Nam. I have started my Web development since 2013 and focused mostly on <b>WordPress</b>, <b>ReactJS</b> and other <b>Front-end</b> technologies.</p>
					<p>In my free time, I do freelancing to help other people build their own website.</p>
					<p>You can contact me by email at <strong><a href="mailto:viet34tqc@gmail.com">viet34tqc@gmail.com</a></strong></p>
				</div>
			</div>
		</section>
	);
};

export default Intro;

