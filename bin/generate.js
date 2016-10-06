'use strict';

var fs = require('fs');
var React = require('react');
var render = require('react-dom/server').renderToStaticMarkup;
var beautifyHTML = require('js-beautify').html;

var CreationList = require('./site_components/creations/creationList');

var Homepage = function Homepage(props) {
    return React.createElement(
        'html',
        { lang: 'en' },
        React.createElement(
            'head',
            null,
            React.createElement('meta', { charSet: 'utf-8' }),
            React.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
            React.createElement(
                'title',
                null,
                'Kraw\'s New Home'
            ),
            React.createElement('meta', { name: 'description', content: 'Kraw\'s Homepage' }),
            React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            React.createElement('link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }),
            React.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', integrity: 'sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7', crossOrigin: 'anonymous' }),
            React.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css', integrity: 'sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r', crossOrigin: 'anonymous' }),
            React.createElement('script', { src: 'https://use.fontawesome.com/c089dd9f5b.js' }),
            React.createElement(
                'style',
                null,
                '$_PAGE_STYLES_$'
            )
        ),
        React.createElement(
            'body',
            null,
            React.createElement(
                'section',
                { className: 'jumbotron text-center' },
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement('img', { src: 'static/img/avatar.png', alt: 'Kraw\'s Avatar', className: 'img-circle text-center', style: {
                            width: '200px'
                        } }),
                    React.createElement(
                        'h1',
                        null,
                        'Mark\'s Homepage'
                    ),
                    React.createElement(
                        'p',
                        { className: 'text-muted' },
                        React.createElement(
                            'i',
                            null,
                            'Still figuring out what to put here...'
                        )
                    )
                )
            ),
            React.createElement(CreationList, null),
            React.createElement(
                'footer',
                { style: {
                        width: '100%',
                        backgroundColor: '#eee'
                    } },
                React.createElement(
                    'div',
                    { className: 'container', style: {
                            maxWidth: '1000px',
                            paddingTop: '20px',
                            paddingBottom: '15px',
                            marginTop: '50px'
                        } },
                    React.createElement(
                        'p',
                        { className: 'text-center' },
                        '$_EMAIL_$',
                        React.createElement(
                            'a',
                            { href: 'https://twitter.com/krawthekrow' },
                            React.createElement('i', { className: 'fa fa-twitter fa-2x social-btn', 'aria-hidden': 'true' })
                        ),
                        React.createElement(
                            'a',
                            { href: 'https://github.com/krawthekrow' },
                            React.createElement('i', { className: 'fa fa-github fa-2x social-btn', 'aria-hidden': 'true' })
                        ),
                        React.createElement(
                            'a',
                            { href: 'https://krawthekrow.wordpress.com/' },
                            React.createElement('i', { className: 'fa fa-wordpress fa-2x social-btn', 'aria-hidden': 'true' })
                        )
                    )
                )
            )
        )
    );
};

var homepageMarkup = beautifyHTML(('<!DOCTYPE html>' + render(React.createElement(Homepage, null))).replace('$_EMAIL_$', '\n        <script type="text/javascript">\n            document.write(\'<a href="mailt\'+\'o:krawt\'+\'hekrow@g\'+\'mail.com"><i class="fa fa-envelope fa-2x social-btn" aria-hidden="true"></i></a>\');\n        </script>\n    ').replace('$_PAGE_STYLES_$', '\n        .social-btn{\n            color: #777;\n            margin: 0px 5px;\n        }\n    '));

fs.writeFile('index.html', homepageMarkup, function (err) {
    if (err) {
        console.log(err);
    }
});