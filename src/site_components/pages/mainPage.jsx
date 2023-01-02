const React = require('react');

module.exports = (props) => {
	return [
		<div className="container" style={{
			maxWidth: '500px',
			padding: '0px 20px'
		}}>
			<img src="static/img/avatar.png" alt="Kraw's Avatar" className="rounded-circle text-center float-left" style={{
				width: '100px',
				margin: '0px 20px'
			}} />
			<div style={{
			}}>
				<p>Hi, I'm Kraw! Kraw, the Krow! You know how the notion of a personal web-site may be considered old-fashioned in the age of social media? I don't. Welcome to my homepage, and thanks for visiting!</p>
				<p>I like computers, <a href="puzzles.html">puzzles</a>, <a href="stuff.html#music">music</a>, <a href="subframe.html">subframe technology</a> and pig intestines. Feel free to explore the little bits of my life that I've compiled in this space :) If you're itching for more, you can also find me on <a href="https://github.com/krawthekrow">Github</a> or the venerable <a href="https://thirdwest.scripts.mit.edu/~thirdwest/wiki/index.php?title=User:Mtheng">floorpi wiki</a>.</p>
			</div>
		</div>,
	];
};
