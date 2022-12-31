const React = require('react');

const CreationList = require('../creations/creationList');

module.exports = (props) => {
	return <>
		<CreationList />
		<div className="container" style={{
			maxWidth: '600px',
			padding: '0px 35px'
		}}>
			<h1 className="text-center" style={{
				paddingTop: '30px'
			}}>And one more thing...</h1>
			<p>
				I made a song! You can download it <a href="static/files/music/funtimes.mp3">here</a> or at <a href="https://soundcloud.com/user-176064693/fun-times">SoundCloud</a>. Here's a little video I made a while back that uses it.
			</p>
			<div style={{
				textAlign: 'center'
			}}>
				<iframe width="500" height="282" src="https://www.youtube.com/embed/KdmdL-7tX0s" allowFullScreen ></iframe>
			</div>
		</div>
	</>;
};

