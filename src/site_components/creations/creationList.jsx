const React = require('react');
const listData = require('./creationListData');

const mainCreations = [
	'subframe-mod',
	'pi-connect',
	'burkinator',
	'contourer',
	'yweiyst',
];

const collegeCreations = [
	'flight-zc7796',
	'real-time-sph',
];

const musicCreations = [
	'absolute-music',
	'dragonfly-dance',
	'fun-times',
	'track-2020-05',
	'track-2022-01',
];

const ancientCreations = [
	'lightpc',
	'virtuality',
	'fourier-transform',
	'train-game',
	'laser-game',
	'stickman-animation',
];

const BigCreation = (props) => {
	const creation = listData[props.id];
	const link = (creation.link != undefined) ? creation.link :
		creation.buttons[0].link;
	return <div className="row mt-3">
		<div className="col-sm-4 d-flex align-items-center">
			<a href={link}>
				<img
					src={`static/img/creations/${creation.image}`}
					alt={creation.name}
					className="w-100"
				/>
			</a>
		</div>
		<div className="col-sm-8 d-flex align-items-center">
			<p className="mb-0">
				<b><a href={link}>{ creation.name }</a></b>.{' '}
				<span
					dangerouslySetInnerHTML={{__html: creation.description}}
				/>
			</p>
		</div>
	</div>;
};

const SmallCreation = (props) => {
	const creation = listData[props.id];
	const link = (creation.link != undefined) ? creation.link :
		creation.buttons[0].link;
	return <div className="row">
		<div className="col-sm-12">
			<p className="my-2">
				<b><a href={link}>{ creation.name }</a></b>.{' '}
				<span
					dangerouslySetInnerHTML={{__html: creation.description}}
				/>
			</p>
		</div>
	</div>;
};

module.exports = (props) => {
	return <section className="container" style={{
		maxWidth: '720px',
	}}>
		<div className="text-center mb-4">
			<h2>Fun stuff</h2>
			<div>that you might even potentially find useful</div>
		</div>
		{ mainCreations.map((id) => {
			return <BigCreation id={id} key={id} />;
		}) }
		<div className="text-center mt-5 mb-4">
			<h2 id="music">Music stuff</h2>
			<div>that... I mean, it's just music, maybe it's worth a listen</div>
		</div>
		{ musicCreations.map((id) => {
			return <SmallCreation id={id} key={id} />;
		}) }
		<div className="text-center mt-5 mb-4">
			<h2>College stuff</h2>
			<div>that I inexplicably still think is pretty cool</div>
		</div>
		{ collegeCreations.map((id) => {
			return <BigCreation id={id} key={id} />;
		}) }
		<div className="text-center mt-5 mb-4">
			<h2>Ancient stuff</h2>
			<div>that I'm almost too embarrassed to publish here</div>
			<div><small>
				but will anyway because they hold some amount of sentimental value to me
			</small></div>
			<div><small style={{fontSize: '50%'}}>
				and besides this is not a resume and who said you can only put things you're unabashedly proud of on your homepage anyway?
			</small></div>
		</div>
		{ ancientCreations.map((id) => {
			return <SmallCreation id={id} key={id} />;
		}) }
	</section>;
};
