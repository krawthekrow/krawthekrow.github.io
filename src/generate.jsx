const fs = require('fs');
const React = require('react');
const render = require('react-dom/server').renderToStaticMarkup;
const beautifyHTML = require('js-beautify').html;

const MainPage = require('./site_components/pages/mainPage');
const CoolStuffPage = require('./site_components/pages/coolStuffPage');
const SubframePage = require('./site_components/pages/subframePage');
const FaqPage = require('./site_components/pages/faqPage');

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
}];

const PageContents = (props) => {
	switch (props.page.url) {
	case 'index':
		return <MainPage />
		break;
	case 'cool-stuff':
		return <CoolStuffPage />
		break;
	case 'subframe':
		return <SubframePage />
		break;
	case 'faq':
		return <FaqPage />
		break;
	default:
		console.log('WARNING: unknown pageUrl');
		return <MainPage />
		break;
	}
};

const Homepage = (props) => {
	// If you want to use font awesome again:
	// <script src="https://use.fontawesome.com/c089dd9f5b.js"></script>
	return <html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<title>Mark's New Home</title>
			<meta name="description" content="Mark's Homepage" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
			<style>$_PAGE_STYLES_$</style>
		</head>
		<body>
			<nav className="navbar navbar-expand-sm navbar-light bg-light" style={{
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
						{ PAGES.map((page) =>
							<a className={
								`nav-item nav-link${(page.url == props.page.url) ? ' active' : ''}`
							} href={page.url + '.html'} key={page.url}>
								{ page.navbarName }
							</a>
						) }
					</div>
				</div>
			</nav>
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
			.social-btn {
				color: #777;
				margin: 0px 5px;
			}
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
