const React = require('react');

module.exports = (props) => {
	return [
		<div className="container" style={{
			maxWidth: '500px',
			padding: '0px 35px',
		}}>
			<p>
				<b>Vanilla Bootstrap? Really?</b> Yeah. I like the default design. Why fix something that ain't broken? (Also, this website was created, like, at least half a decade ago.)
			</p>
			<p>
				<b>How was this site generated?</b> Never thought you'd ask! It was generated offline with React. See the source code <a href="https://github.com/krawthekrow/krawthekrow.github.io/tree/dev">here</a>.
			</p>
			<p>
				<b>What's your email?</b> $_EMAIL_$, since you asked so nicely.
			</p>
			<p>
				<b>Do you still do puzzles?</b> Yes! Though it's unlikely I'll make another puzzle any time soon.
			</p>
			<p>
				<b>Do you still do subframe?</b> Only a little here and there now.
			</p>
			<p>
				<b>Crows don't have yellow beaks.</b> I'm a Krow, not a crow. Also, that's not a question.
			</p>
			<p>
				<b>How do I solve the puzzle?</b> What puzzle?
				<span dangerouslySetInnerHTML={{__html: '<!-- Just kidding, there isn\'t actually a puzzle. At least not now. :) -->'}}></span>
			</p>
		</div>
	];
};

