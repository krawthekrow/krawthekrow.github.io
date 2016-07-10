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
            React.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css', integrity: 'sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r', crossOrigin: 'anonymous' })
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
                    React.createElement(
                        'h1',
                        null,
                        'Hi, I\'m Mark!'
                    ),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'i',
                            null,
                            'Exploring the epic, discovering the beautiful,',
                            React.createElement('br', null),
                            'getting the damn API to work.'
                        )
                    )
                )
            ),
            React.createElement(CreationList, null)
        )
    );
};

var homepageMarkup = beautifyHTML('<!DOCTYPE html>' + render(React.createElement(Homepage, null)));
console.log(homepageMarkup);
fs.writeFile('index.html', homepageMarkup, function (err) {
    if (err) {
        console.log(err);
    }
});