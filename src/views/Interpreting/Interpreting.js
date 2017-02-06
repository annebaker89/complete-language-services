var React = require('react');
var { Link } = require('react-router');

var i18n = require('i18next');

var Main = React.createClass({
    render: function() {
        return (
            <div className="b-pageContent">
                <p>{i18n.t('interpretingContent.part1')}</p>
                <p>{i18n.t('interpretingContent.part2')}</p>
                <p>{i18n.t('interpretingContent.part3')}</p>
                <h5>{i18n.t('interpretingContent.telephone.title')}</h5>
                <p>{i18n.t('interpretingContent.telephone.part1')}</p>
            </div>
        );
    }
});

module.exports = Main;
