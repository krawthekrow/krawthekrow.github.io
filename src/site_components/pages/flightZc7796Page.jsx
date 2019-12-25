const React = require('react');

module.exports = (props) => {
	return [
		<div className="container" style={{
			maxWidth: '600px',
			padding: '0px'
		}}>
			<img src="static/img/flight-zc7796-banner.png" alt="Flight ZC7796" className="text-center" style={{
			}} />
		</div>,
		<div className="container" style={{
			maxWidth: '600px'
		}}>
			<h1 className="text-center" style={{
				marginTop: '40px',
				marginBottom: '20px'
			}}>Flight ZC7796</h1>
			<div style={{
			}}>
				<p>A visual novel about flying in a commercial airliner... and also a bunch of other stuff. Do you have what it takes to survive <i>Flight ZC7796</i>?</p>
			</div>
			<div className="text-center" style={{
				margin: '30px 0px'
			}}>
				<div className="btn-group-vertical">
					<a href="static/files/creations/flight_zc7796-1.0-pc.zip" role="button" className="btn btn-lg btn-info">
						Download for Windows/Linux
					</a>
					<a href="static/files/creations/flight_zc7796-1.0-mac.zip" role="button" className="btn btn-lg btn-secondary">
						Download for Mac
					</a>
				</div>
			</div>
			<div>
				<p>By the way, put on those headphones, 'cos there's music!</p>
			</div>
			<h2 className="text-center" style={{
				marginTop: '50px',
				marginBottom: '20px'
			}}>FAQ</h2>
			<div>
				<p>
					<b>What's it about?</b> Well... It's the kind of game that's best played without knowing too much beforehand. I <i>can</i> say, though, that it's story-based, contains a few (relatively easy) puzzles, and is <i>not</i> a dating sim.
				</p>
				<p>
					<b>How long does it take?</b> Around an hour, depending on how fast you are at reading and puzzle-solving.
				</p>
				<p>
					<b>How'd you make it?</b> The game is based on <a href="https://www.renpy.org/">Ren'Py</a>, the same engine used by DDLC and Save the Date.
				</p>
				<p>
					<b>How'd you make the music?</b> <a href="https://lmms.io/">LMMS</a>, an open-source alternative to FL Studio. All instruments are based on the triple oscillator, i.e. sine, triangle and sawtooth waves. Timbre comes from reverb, tube amp and ADSR.
				</p>
				<p>
					<b>How'd you make the art?</b> <a href="http://artflowstudio.com/">ArtFlow</a>, a free app for Android. Sketch, outline, paint; heavy use of the perspective tool. Yes, my phone comes with a stylus, and no, I don't have a drawing tablet.
				</p>
				<p>
					<b>That seems awfully budget.</b> Hey, if it sounds nice and looks nice, I'm happy.
				</p>
				<p>
					<b>How long did it take?</b> Four and a half weeks, from conception to playtesting. No, I didn't get much of anything else done during that month.
				</p>
				<p>
					<b>What's CMS.618?</b> It's the Interactive Narrative class at MIT, taught by Nick Montfort (thanks Nick!). Isn't it great when you can get <i>credit</i> for making a completely unconstrained game?
				</p>
				<p>
					<b>Can I see the source code?</b> You get it when you download the game, actually. But <a href="https://github.com/krawthekrow/flight-zc7796">here you go</a> anyway.
				</p>
				<p>
					<b>What's the password?</b> What password?
				</p>
			</div>
		</div>
	];
};
