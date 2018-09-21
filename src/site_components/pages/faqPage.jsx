const React = require('react');

module.exports = (props) => {
	return [
		<section className="container" style={{
			maxWidth: '500px',
			padding: '0px 35px'
		}}>
			<p>
				<b>Vanilla Bootstrap? Really?</b> Yeah. I'm a minimalist and I like the default design. (Well, almost. I did change a few things.) Why fix something that isn't broken?
			</p>
			<p>
				<b>How was this site generated?</b> Great question! It was generated offline by React. See the source code <a href="https://github.com/krawthekrow/krawthekrow.github.io/tree/dev">here</a>.
			</p>
			<p>
				<b>What's your email?</b> $_EMAIL_$, since you asked so nicely.
			</p>
			<p>
				<b>Do you still do subframe?</b> No, at least not right now. I'm a little too busy for that.
			</p>
			<p>
				<b>Do you still blog?</b> Evidently not.
			</p>
			<p>
				<b>How do I solve the puzzle?</b> What puzzle?
				<div dangerouslySetInnerHTML={{__html: '<!-- Just kidding, there isn\'t actually a puzzle. At least not now. :) -->'}}></div>
			</p>
		</section>
	];
};

