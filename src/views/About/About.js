var React = require('react');
var { Link } = require('react-router');

var i18n = require('i18next');

var Main = React.createClass({
    render: function() {
        return (
            <div className="b-pageContent">
                <p>{i18n.t('aboutContent.part1')}</p>
                <p>{i18n.t('aboutContent.part2')}</p>
                <p>{i18n.t('aboutContent.part3')}</p>
                <p>{i18n.t('aboutContent.part4')} <a href= "mailto:info@clslanguages.com">info@clslanguages.com</a>.</p>
            </div>
        );
    }
});

module.exports = Main;
