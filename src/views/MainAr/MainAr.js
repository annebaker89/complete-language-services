var React = require('react');

var TranslationService = require('TranslationService');

var Banner = require('Banner');

var MainAr = React.createClass({
    componentWillMount: function() {
        TranslationService.default.load('ar').then(() => {
            console.log('Loaded translations.');
            this.forceUpdate();
        });
    },
    render: function() {
        return (
            <div>
                <Banner />
            </div>
        );
    }
});

module.exports = MainAr;
