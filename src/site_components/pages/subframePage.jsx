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
	return <div className="container" style={{
		maxWidth: '550px',
	}}>
		<div className="card mb-3">
			<div className="card-body">
				<div className="card-title">
					<b>Subframe tools quick access</b>
				</div>
				<div className="card-text">
					<ul className="mb-0">
						<li><a href="https://powdertoy.co.uk/Discussions/Thread/View.html?Thread=21251">The Subframe Mod</a>: GUI enhancements to help with subframe development.</li>
						<li><a href="https://github.com/krawthekrow/tpt_schemtools">SchemTools</a>: Lua framework for code-based subframe engineering.</li>
					</ul>
				</div>
			</div>
		</div>
		<p>
			<b>What's subframe?</b> Subframe is an electronics design paradigm in <a href="https://powdertoy.co.uk/">The Powder Toy</a>, a falling-sand game from back when falling-sand games were still a thing. It exploits the way that the game updates particles to create very fast electronics. Here are some things I made that use subframe:
		</p>
		<div className="card-group" style={{
			marginBottom: '20px'
		}}>
			<TptSave name="SIMD16S" desc="Accelerator for bitmap operations running Conway's Game of Life." img="gpu.png" tptid="2046454" />
			<TptSave name="DISP56S" desc="Low-latency color screen for ~15Hz video." img="color-screen.png" tptid="2305687" />
			<TptSave
				name="26-Bit Divider"
				desc={<>
					Division circuit based on the radix-2 <a href="https://en.wikipedia.org/wiki/Division_algorithm#SRT_division">SRT division algorithm</a>.
				</>}
				img="divider.png"
				tptid="2404111"
			/>
		</div>
		<p>
			Subframe is often conflated with general Powder Toy electronics and computer-making, but, technically speaking, a creation is really only "subframe" if it exploits particle order in a way not explicitly supported by the base game. In terms of Minecraft analogies, subframe is more closely related to things like <a href="https://www.youtube.com/watch?v=uAy2FVYhUpY">piston fast transport</a> than to redstone computers.
		</p>
		<p>
			<b>Why subframe?</b> Subframe is a niche field and is full of unsolved problems. Optimizing a circuit to be as small as possible is like code golf in a very esoteric language. The results are often satisfying and fun to play with. What's more, The Powder Toy is free and open source.
		</p>
		<p>
			Interestingly, subframe engineering has many parallels with real-life digital logic design. While particles update sequentially, geometric constraints and FILT mechanics make it such that circuits have to be designed with parallelism in mind. For example, the best subframe adders to date are <a href="https://robey.lag.net/2012/11/14/how-to-add-numbers-2.html">Kogge-Stone</a> adders.
		</p>
		<p>
			<b>Why not subframe?</b> Very few people still play The Powder Toy, so no one will know what you mean when you say "subframe". Its physics is in no way realistic: memory access is immediate (though this may change with PHOT-stack-based memory), incrementers are O(1), and noise is never a problem. After a certain point, you don't gain any transferrable skills.
		</p>
		<p>
			<b>How to subframe?</b> As with other things in The Powder Toy, the best way to learn is through reverse-engineering and experimentation. You could also come visit us at the $_SUBFRAME_DISCORD_$ or <b>#powder-subframe</b> on <a href="https://libera.chat/">Libera.Chat</a>. Beyond that, here's some material to help you get started.
		</p>
		<div className="card-group" style={{
			marginBottom: '20px'
		}}>
			<TptSave name="The Subframe Lessons" desc="A series of lessons explaining the basics of subframe and digital logic, starting from the very basics." img="sl101.png" tptid="2232626" />
			<TptSave name="Incrementer Tutorial" desc="A slightly outdated but advanced tutorial that walks you through creating a logarithmic incrementer." img="incrementer-tutorial.png" tptid="2061643" />
			<TptSave name="The Subframe Handbook" desc="A slightly outdated collection of common circuits that you could use or reverse-engineer." img="handbook.png" tptid="2170655" />
		</div>
		<p>
			Once you've figured out the basics, you'll probably want to download <a href="https://powdertoy.co.uk/Discussions/Thread/View.html?Thread=21251">my mod</a> or <a href="https://powdertoy.co.uk/Discussions/Thread/View.html?Thread=25877">Maticzpl's Lua port</a> to help with things like particle order reloading and stack manipulation. You'll also find it useful to learn how to automate particle placement and configuration with Lua. Lately, I've converted to using <a href="https://github.com/krawthekrow/tpt_schemtools">SchemTools</a> to develop circuits entirely in Lua, which makes it easier to test, refactor and document designs.
		</p>
		<p>
			<b>What's left to do?</b> There's certainly a lot to be done, even just in terms of making smaller and more powerful computer systems. There's also continued work on basic technologies like velocity adders and megastacks, as well as application-specific components for things like video games. I'm most excited about massively parallel graphics, an area that published designs have barely scratched the surface of.
		</p>
	</div>;
};
