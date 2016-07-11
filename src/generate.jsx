const fs = require('fs');
const React = require('react');
const render = require('react-dom/server').renderToStaticMarkup;
const beautifyHTML = require('js-beautify').html;

const CreationList = require('./site_components/creations/creationList');

const Homepage = (props) =>
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>Kraw's New Home</title>
            <meta name="description" content="Kraw's Homepage" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossOrigin="anonymous" />
            <script src="https://use.fontawesome.com/c089dd9f5b.js"></script>
            $_PAGE_STYLES_$
        </head>
        <body>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1>Hi, I'm Mark!</h1>
                    <p className="text-muted"><i>
                        Exploring the epic, discovering the beautiful,<br/>
                        getting the damn API to work.
                    </i></p>
                </div>
            </section>
            <CreationList />
            <footer style={{
                width: '100%',
                backgroundColor: '#eee'
            }}>
                <div className="container" style={{
                    maxWidth: '1000px',
                    paddingTop: '20px',
                    paddingBottom: '15px',
                    marginTop: '50px'
                }}>
                    <p className="text-center">
                        $_EMAIL_$
                        <a href="https://github.com/krawthekrow"><i className="fa fa-github fa-2x social-btn" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/krawthekrow"><i className="fa fa-twitter fa-2x social-btn" aria-hidden="true"></i></a>
                    </p>
                </div>
            </footer>
        </body>
    </html>;

const homepageMarkup = beautifyHTML(
    ('<!DOCTYPE html>' + render(<Homepage></Homepage>))
    .replace('$_EMAIL_$', `
        <script type="text/javascript">
            document.write('<a href="mailt'+'o:krawt'+'hekrow@g'+'mail.com"><i class="fa fa-envelope fa-2x social-btn" aria-hidden="true"></i></a>');
        </script>
    `)
    .replace('$_PAGE_STYLES_$',`
        <style>
            .social-btn{
                color: #777;
                margin: 0px 5px;
            }
        </style>
    `));

console.log(homepageMarkup);

fs.writeFile('index.html', homepageMarkup, err => {
    if(err){
        console.log(err);
    }
});