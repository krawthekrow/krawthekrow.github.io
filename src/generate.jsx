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
        </head>
        <body>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1>Hi, I'm Mark!</h1>
                    <p><i>
                        Exploring the epic, discovering the beautiful,<br/>
                        getting the damn API to work.
                    </i></p>
                </div>
            </section>
            <CreationList />
        </body>
    </html>;

const homepageMarkup = beautifyHTML('<!DOCTYPE html>' + render(<Homepage></Homepage>));
console.log(homepageMarkup);
fs.writeFile('index.html', homepageMarkup, err => {
    if(err){
        console.log(err);
    }
});
