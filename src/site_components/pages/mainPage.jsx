const React = require('react');

const MakeSpellDesc = require('../spells/makeSpellDesc');
const SpellData = require('../spells/spellData');

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
				<p>Hi! I'm Mark (a.k.a. krawthekrow or mark2222), and my dream is to become a wizard. The spell of the day is <script dangerouslySetInnerHTML={{__html: `
					const options = [
						${
							SpellData.map((spell) => '`' + MakeSpellDesc(spell) + '`').join()
						}
					];
					document.write(options[Math.floor(Math.random() * options.length)]);
				`}}>
				</script><noscript><span id="spell" dangerouslySetInnerHTML={{__html: MakeSpellDesc(SpellData[0])}}></span></noscript> Beyond that, I like computers, math, music, <a href="subframe.html">subframe technology</a> and pig intestines. Find me on <a href="https://github.com/krawthekrow">Github</a> or the venerable <a href="https://thirdwest.scripts.mit.edu/~thirdwest/wiki/index.php?title=User:Mtheng">floorpi wiki</a>. Welcome to my homepage!</p>
				<span dangerouslySetInnerHTML={{__html: '<!-- No, I\'m not actually a Harry Potter fan. That was an inside joke. Actually this whole page is an inside joke. -->'}}></span>
			</div>
		</div>,
		<div className="container" style={{
			marginTop: '30px',
			maxWidth: '500px'
		}}>
			<div className="card">
				<div className="card-body text-center">
					<p className="card-title"><b>I made a game!</b></p>
					<p className="card-text">Play it <a href="flight-zc7796.html">here</a>.</p>
				</div>
			</div>
		</div>
	];
};
