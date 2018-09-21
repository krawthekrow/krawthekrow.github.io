const React = require('react');

const TptSave = (props) => {
	const tptLink = `https://powdertoy.co.uk/Browse/View.html?ID=${props.tptid}`;
	return <div className="card" style={{
		margin: '2px'
	}}>
		<a href={tptLink}><img className="card-img-top" src={`static/img/powder-toy/${props.img}`} alt={props.name} /></a>
		<div className="card-body" style={{
			padding: '15px'
		}}>
			<h5 className="card-title"><a href={tptLink}>{props.name}</a></h5>
			<p className="card-text">{props.desc}</p>
		</div>
	</div>;
};

module.exports = (props) => {
	return [
		<section className="container" style={{
			maxWidth: '600px',
			padding: '0px 35px'
		}}>
			<p>
				<b>What's subframe?</b> Subframe is an electronics design paradigm in <a href="https://powdertoy.co.uk/">The Powder Toy</a>, a falling-sand game from back when falling-sand games were still a thing. It exploits the way that the game updates particles to create very fast electronics. Here are some cool things that use subframe:
			</p>
			<div className="card-group" style={{
				marginBottom: '20px'
			}}>
				<TptSave name="SIMD16S" desc="Primitive bitwise graphics card, enough to run Conway's Game of Life." img="gpu.png" tptid="2046454" />
				<TptSave name="DISP56S" desc="Low-latency color screen for ~15Hz video." img="color-screen.png" tptid="2305687" />
				<TptSave name="R16K1S60" desc="The first subframe computer (by LBPHacker, not me)." img="r16k1s60.png" tptid="1932845" />
			</div>
			<p>
				<b>Why subframe?</b> Subframe is a niche field and is full of unsolved problems. Optimizing a circuit to be as small as possible is like code golf in a very esoteric language. The results are often satisfying and fun to play with. What's more, Powder Toy is free and open source.
			</p>
			<p>
				Interestingly, subframe engineering has many parallels with real-life digital logic design. While all the particles update sequentially, geometric constraints and the way FILT works make it such that circuits have to be designed with parallelism in mind. In fact, the best subframe adders are <a href="https://robey.lag.net/2012/11/14/how-to-add-numbers-2.html">Kogge-Stone</a> adders, and the best subframe divider is a radix-2 <a href="https://en.wikipedia.org/wiki/Division_algorithm#SRT_division">SRT divider</a>.
			</p>
			<p>
				<b>Why not subframe?</b> Very few people still play The Powder Toy, so no one will know what you mean when you say "subframe". Its physics is in no way realistic: memory access is immediate (though this may change with PHOT-stack-based memory), incrementers are O(1), and noise is never a problem. After a certain point, you don't gain any transferrable skills.
			</p>
			<p>
				<b>How to subframe?</b> As with other things in The Powder Toy, the best way to learn is through reverse-engineering and experimentation. You could also come to <b>#powder-subframe</b> on Freenode IRC. Beyond that, here's some material to help you get started.
			</p>
			<div className="card-group" style={{
				marginBottom: '20px'
			}}>
				<TptSave name="The Subframe Lessons" desc="A series of lessons explaining the basics of subframe and digital logic, starting from the very basics." img="sl101.png" tptid="2232626" />
				<TptSave name="Incrementer Tutorial" desc="A slightly outdated but advanced tutorial that walks you through creating a logarithmic incrementer." img="incrementer-tutorial.png" tptid="2061643" />
				<TptSave name="The Subframe Handbook" desc="A collection of common circuits that you could use or reverse-engineer." img="handbook.png" tptid="2170655" />
			</div>
			<p>
				Once you're sufficiently familiar with how things work, you could try using <a href="https://powdertoy.co.uk/Discussions/Thread/View.html?Thread=21251">my mod</a> for better productivity. As you might imagine, the game's user interface wasn't built with subframe development in mind.
			</p>
			<p>
				<b>What's left to do?</b> The current published subframe computers and graphics chips use very old technology. Smaller and more powerful designs are possible. In fact, by my estimates, it should be possible to do things like play Pong, render interactive 3D graphics, and even run a rudimentary particle-based "fluid simulation" once the right hardware is developed.
			</p>
			<p>
				<b>Bonus!</b> It turns out that subframe-like machines exist in Minecraft too. Check out <a href="https://www.youtube.com/watch?v=uAy2FVYhUpY">this video</a> on fast piston transportation.
			</p>
		</section>
	];
};
