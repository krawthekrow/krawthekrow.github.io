'use strict';

var React = require('react');
var listData = require('./creationListData');

module.exports = function (props) {
    return React.createElement(
        'section',
        { className: 'container', style: { maxWidth: '1000px' } },
        React.createElement(
            'h1',
            { className: 'text-center' },
            'Stuff I\'ve Made'
        ),
        listData.map(function (creation, id) {
            return React.createElement(
                'div',
                { className: 'row', key: id },
                React.createElement(
                    'div',
                    { className: 'col-sm-4', style: { paddingTop: '20px' } },
                    React.createElement('img', { src: 'static/img/creations/' + creation.image, alt: creation.name, style: { width: '100%' } })
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-8' },
                    React.createElement(
                        'h2',
                        null,
                        'link' in creation ? React.createElement(
                            'a',
                            { href: creation.link },
                            creation.name
                        ) : creation.name,
                        React.createElement('br', null),
                        React.createElement(
                            'small',
                            null,
                            creation.subtitle
                        )
                    ),
                    React.createElement('p', { dangerouslySetInnerHTML: { __html: creation.description } }),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'i',
                            null,
                            creation.status,
                            ', ',
                            creation.productionPeriod
                        )
                    )
                )
            );
        })
    );
};