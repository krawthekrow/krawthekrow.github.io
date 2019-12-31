module.exports = [{
	name: 'Flight ZC7796',
	image: 'flight-zc7796.png',
	buttons: [{
		text: 'Play Now',
		link: 'flight-zc7796.html'
	}, {
		text: 'Source Code',
		link: 'https://github.com/krawthekrow/flight-zc7796'
	}],
	description: 'A visual novel about... flying in a commercial airliner. Yeah, it\'s the kind of game that\'s best played without knowing too much beforehand. But I think it\'s interesting, and people say it\'s fun, so <a href="flight-zc7796.html">go play it</a>! It only takes an hour or so.'
}, {
	name: 'Pi Connect',
	image: 'pi-connect.png',
	buttons: [{
		text: 'App',
		link: 'https://krawthekrow.github.io/pi-connect/'
	}, {
		text: 'Docs',
		link: 'https://github.com/krawthekrow/pi-connect'
	}, {
		text: 'Write a Game',
		link: 'https://github.com/krawthekrow/pi-connect-maker'
	}],
	description: 'Run your very own Only Connect! <a href="https://www.bbc.co.uk/programmes/b00lskhg">Only Connect</a> is a British quiz show about finding hidden connections between seemingly unrelated things. At some point <a href="https://thirdwest.scripts.mit.edu/~thirdwest/wiki/index.php?title=Only_Connect">Floor Pi</a> collectively got annoyed that the real Only Connect has too much British trivia and not enough puzzles, so this happened.'
}, {
	name: 'Contourer',
	image: 'contourer.png',
	buttons: [{
		text: 'Demo',
		link: 'https://krawthekrow.github.io/contourer/'
	}, {
		text: 'Source Code',
		link: 'https://github.com/krawthekrow/contourer'
	}, {
		text: 'Blog',
		link: 'https://krawdump.wordpress.com/2016/07/26/needhams-complex-analysis-in-5-minutes/'
	}],
	description: 'A GPU-accelerated interactive visualization tool for mesh transformations, electric fields and complex analysis. Animate your own contour plots with just a little bit of code, or check out the ones in the demo. Browser-based and mobile-friendly, so no downloads required.'
}, {
	name: 'Real-Time SPH',
	image: 'real-time-sph.png',
	buttons: [{
		text: 'Video',
		link: 'https://www.youtube.com/watch?v=OTSuqxK--3Y&feature=youtu.be'
	}, {
		text: 'Source Code',
		link: 'https://github.com/krawthekrow/real-time-sph'
	}, {
		text: 'Docs',
		link: 'https://github.com/krawthekrow/real-time-sph/blob/master/doc/writeup.pdf'
	}],
	description: 'Real-time fluid simulation and rendering on the GPU. Unlike traditional real-time fluid sims, this uses smoothed-particle hydrodynamics, which has its own set of advantages and disadvantages. I made this for my final project in computer graphics, but really I just wanted an excuse to try CUDA.'
}, {
	name: 'LightPC',
	image: 'lightpc.jpg',
	buttons: [{
		text: 'Demo',
		link: 'http://powdertoy.co.uk/Browse/View.html?ID=1570768'
	}, {
		text: 'Compiler',
		link: 'static/files/creations/lightpc-compiler.py'
	}, {
		text: 'Docs',
		link: 'static/files/creations/lightpc-resources.zip'
	}],
	description: 'It\'s a computer in The Powder Toy, a falling-sand game from the previous decade. Today, this is mostly outdated due to the advent of subframe technology (check out <a href="subframe.html">my page on subframe</a>!). Also, I made a neat <a href="static/files/creations/lightpc-timelapse.gif">timelapse</a> of me making it, which is probably the coolest part of this, really.'
}, {
	name: 'Fourier Transformer',
	image: 'fouriertransform.jpg',
	buttons: [{
		text: 'SWF File',
		link: 'static/files/creations/fouriertransform.swf'
	}],
	description: 'Built back in the day when Flash was still a thing, this tool illustrates how a function can be decomposed into sinusoids through the <span style="text-decoration: line-through;">Fourier</span> Discrete Cosine Transform. Use the mouse to draw a function, then hold down the spacebar to reconstruct it from sinusoids. Press "Z" to view the spectrum and "R" to reset.'
}, {
	name: 'Virtuality',
	image: 'virtuality.jpg',
	buttons: [{
		text: 'Play Online',
		link: 'http://iplayif.com/?story=https://krawthekrow.github.io/static/files/creations/Virtuality.zblorb'
	}, {
		text:'IFDB',
		link: 'http://ifdb.tads.org/viewgame?id=g1gno99dv2qbfxib'
	}, {
		text: 'Solution',
		link: 'static/files/creations/virtuality-walkthrough.txt'
	}],
	description: 'An experimental interactive fiction game I made a billion years ago. I clearly didn\'t understand any game design principles then, but apparently I still had (at least, in my present opinion) a great sense of humor. You can play it offline by loading the <a href="static/files/creations/Virtuality.zblorb">game file</a> into something like <a href="https://github.com/garglk/garglk/releases">Gargoyle</a> ("sudo apt install gargoyle" on Linux).'
}];

const UNINCLUDED_CREATIONS = [
{
	'id': '2',
	'sequence': '2',
	'name': 'Ship Detection',
	'image': 'shipdetection.jpg',
	'link': '',
	'description': 'I played around with a satellite image for a month-long research project, coincidentally just after I took a basic machine learning course on Coursera. Before long, I was playing with neural networks, sliding windows and linear regression. Fourier transforms and neural networks ultimately didn\'t do as well as convolution against a normal distribution, but I had fun trying those out anyways. Of course, ship recognition is an already very well-researched topic, so once again my efforts yielded no useful results.',
	'production_period': 'Late 2012',
	'status': 'Finished'
},
{
	'id': '3',
	'sequence': '3',
	'name': 'Genetic Algorithm',
	'image': 'ga.jpg',
	'link': '',
	'description': 'I had always wanted to write a genetic algorithm, so one day I hooked up a genetic algorithm to a neural network and created a small simulation of organisms competing with each other for food. When it started learning and coming up with strategies for survival, I could not help but feel that this obviously useless toy was worth the hours spent. Since it was made in XNA, however, packaging the executable for release is painful, so once again there\'s nothing to download.',
	'production_period': 'Mid 2014',
	'status': 'Unfinished'
},
{
	'id': '4',
	'sequence': '4',
	'name': 'Fourier Transform',
	'image': 'fouriertransform.jpg',
	'link': '/static/files/fouriertransform.swf',
	'description': 'Probably my only useful creation, this Flash animation was created to illustrate the concept that any function can be decomposed into a sum of sine waves through the Fourier transform. Use the mouse to draw a function, then press spacebar repeatedly to find the fourier coefficients. Hold it down to accelerate. Press "Z" to view the spectrum and "R" to reset.',
	'production_period': 'Mid 2013',
	'status': 'Finished'
},
{
	'id': '5',
	'sequence': '5',
	'name': 'Autograder',
	'image': 'noimage.jpg',
	'link': '',
	'description': 'Tired of organising programming selection tests where students submit their programs through a messaging board to be copied and pasted into a compiler for grading, I decided to make my own online judge. This was during a time when I couldn\'t tell the difference between Apache and PHP, let alone set up a server, so I wrote a C# script to poll the messaging board, rip the HTML, test the code and provide feedback. It actually worked and saved me lots of effort.',
	'production_period': 'Early 2013',
	'status': 'Finished'
},
{
	'id': '6',
	'sequence': '6',
	'name': 'Vector RTS',
	'image': 'vectorrts.jpg',
	'link': '/static/files/vectorrts.swf',
	'description': 'What was originally intended to be a very simple game turned into an experiment in simulating group behaviour when I found that the movement mechanism was too slow for use in a game (in hindsight, I believe the lag is caused by garbage collection cycles). Since this was supposed to be part of a game, a lot of work was put into ensuring its aesthetic appeal. Hold the "Z" button to select troops, then click anywhere to send them.',
	'production_period': 'Mid 2013',
	'status': 'Unfinished'
},
{
	'id': '7',
	'sequence': '7',
	'name': 'Snake',
	'image': 'snake.jpg',
	'link': '',
	'description': 'A friend challenged me to make a game in two hours. I responded with this utterly useless snake clone. Perhaps the only legitimate game I\'ve ever finished making. Also made with XNA, so there\'s nothing to download. Note that the image was edited to fit the row.',
	'production_period': 'Mid 2011',
	'status': 'Finished'
},
{
	'id': '8',
	'sequence': '8',
	'name': 'Fluid Simulator',
	'image': 'fluidsim.jpg',
	'link': '',
	'description': 'Inspired by other fluid simulators like Powder Toy. The numerous approximations employed makes it completely useless for real-life applications. Also made with XNA, so there\'s nothing to download.',
	'production_period': 'Late 2013',
	'status': 'Unfinished'
},
{
	'id': '9',
	'sequence': '9',
	'name': 'Virtuality',
	'image': 'virtuality.jpg',
	'link': 'http: //jayisgames.com/cgdc7/',
	'description': 'I always liked impersonating adults, so you can\'t blame me for submitting a game for a game competition just a year after I learnt to program. Inform 7 was made to allow people to write games without programming knowledge, but my undiscriminating use of functions and variables made the natural language interface become more of a hinderance than a help. Every time I replay this game, the humour amazes me, given that I wrote it when I was still young.',
	'production_period': 'Early 2010',
	'status': 'Finished'
},
{
	'id': '10',
	'sequence': '10',
	'name': 'Train Game',
	'image': 'traingame.jpg',
	'link': '',
	'description': 'When I was first exposed to C++, the first thing I did was make an interactive fiction game. Looking at it now, it\'s unnecessarily recursive and is the worst code I\'ve ever written, but it is after all my very first real program. It is, of course, incomplete.',
	'production_period': 'Early 2009',
	'status': 'Abandoned'
},
{
	'id': '11',
	'sequence': '11',
	'name': 'The Adventures of A. Stickman',
	'image': 'stickmananimation.jpg',
	'link': '/static/files/stickmananimation.ppt',
	'description': 'My first attempts at animation was with Powerpoint. This short "film" tells a story of a stickman attempting to get past a tree.',
	'production_period': 'Late 2008',
	'status': 'Finished'
},
{
	'id': '12',
	'sequence': '12',
	'name': 'Laser Game',
	'image': 'lasergame.jpg',
	'link': '/static/files/lasergame.ppt',
	'description': 'When I was very young, I thought that all online games were made with Powerpoint (the observant reader would know that they are in fact made with Flash). I tried to make a very simple puzzle game with Powerpoint then, but at the last level got overwhelmed by the sheer number of slides required that the game was never finished.',
	'production_period': 'Late 2008',
	'status': 'Abandoned'
}];
