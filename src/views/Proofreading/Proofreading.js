var React = require('react');
var { Link } = require('react-router');

var i18n = require('i18next');

var Main = React.createClass({
    render: function() {
        return (
            <div className="b-pageContent">
                <p>{i18n.t('proofreadingContent.part1')}</p>
                <p>{i18n.t('proofreadingContent.part2')}</p>
                <p>{i18n.t('proofreadingContent.part3')}</p>
                <p>{i18n.t('proofreadingContent.part4')}</p>
                <p>{i18n.t('proofreadingContent.part5')}</p>
            </div>
        );
    }
});

module.exports = Main;
