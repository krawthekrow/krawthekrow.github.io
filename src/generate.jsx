const fs = require('fs');
const React = require('react');
const render = require('react-dom/server').renderToStaticMarkup;
const beautifyHTML = require('js-beautify').html;

const MainPage = require('./site_components/pages/mainPage');
const CoolStuffPage = require('./site_components/pages/coolStuffPage');
const SubframePage = require('./site_components/pages/subframePage');
const FaqPage = require('./site_components/pages/faqPage');
const FlightZc7796Page = require('./site_components/pages/flightZc7796Page');

const PAGES = [{
	url: 'index',
	navbarName: 'Home'
}, {
	url: 'cool-stuff',
	navbarName: 'Cool Stuff'
}, {
	url: 'subframe', 
	navbarName: 'Subframe'
}, {
	url: 'faq',
	navbarName: 'FAQ'
}, {
	url: 'flight-zc7796',
	title: 'Flight ZC7796',
	desc: 'Flight ZC7796',
	disableNavbar: true
}];

const NAVBAR_PAGES = PAGES.filter(page => 'navbarName' in page);

const PageContents = (props) => {
	switch (props.page.url) {
	case 'index':
		return <MainPage />;
	case 'cool-stuff':
		return <CoolStuffPage />;
	case 'subframe':
		return <SubframePage />;
	case 'faq':
		return <FaqPage />;
	case 'flight-zc7796':
		return <FlightZc7796Page />;
	default:
		console.log('WARNING: unknown pageUrl');
		return <MainPage />;
	}
};

const Navbar = (props) => {
	return <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{
		marginBottom: '20px'
	}}>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" style={{
			justifyContent: 'center',
			width: '800px'
		}} id="navbarSupportedContent">
			<div className="navbar-nav">
				{ NAVBAR_PAGES.map((page) =>
					<a className={
						`nav-item nav-link${(page.url == props.url) ? ' active' : ''}`
					} href={page.url + '.html'} key={page.url}>
						{ page.navbarName }
					</a>
				) }
			</div>
		</div>
	</nav>;
};

const Homepage = (props) => {
	// If you want to use font awesome again:
	// <script src="https://use.fontawesome.com/c089dd9f5b.js"></script>
	return <html lang="en" style={{
	}}>
		<head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<title>{('title' in props.page) ? props.page.title : 'Mark\'s New Home'}</title>
			<meta name="description" content={('desc' in props.page) ? props.page.desc : 'Mark\'s Homepage'} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
			<style>$_PAGE_STYLES_$</style>
		</head>
		<body style={{
			paddingBottom: '30px'
		}}>
			{('disableNavbar' in props.page && props.page.disableNavbar) ? null : <Navbar url={props.page.url} />}
			<PageContents page={props.page} />
			$_PAGE_JAVASCRIPT_$
			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" crossOrigin="anonymous"></script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
		</body>
	</html>;
};

for (const page of PAGES) {
	const markup = beautifyHTML(
		('<!DOCTYPE html>' + render(<Homepage page={page}></Homepage>))
		.replace('$_EMAIL_$', `<script>
				document.write('<a href="mailt'+'o:krawt'+'hekrow@g'+'mail.com">Here it is</a>');
			</script>`)
		.replace('$_PAGE_STYLES_$',`
			a {
				color: #36c;
			}
		`)
		.replace('$_PAGE_JAVASCRIPT_$',`
		`));

	fs.writeFile(page.url + '.html', markup, err => {
		if(err){
			console.log(err);
		}
	});
}
