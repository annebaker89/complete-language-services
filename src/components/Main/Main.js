var React = require('react');

var i18n = require('i18next');

var Main = (props) => {
    console.log(i18n.getResourceBundle());
    return (
        <div>
            <div>
                <div>
                    <p>{i18n.getResource('title')}</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
