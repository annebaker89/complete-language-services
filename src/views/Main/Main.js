var React = require('react');

var TranslationService = require('TranslationService');

var Banner = require('Banner');
var NavigationBar = require('NavigationBar');

var Main = React.createClass({
    componentWillMount: function() {
        TranslationService.default.load('en').then(() => {
            console.log('Loaded translations.');
            this.forceUpdate();
        });
    },
    render: function() {
        return (
            <div>
                <Banner />
                <NavigationBar />
            </div>
        );
    }
});

module.exports = Main;
