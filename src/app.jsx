var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Page = require('Page');
var Main = require('Main');
var MainAr = require('MainAr');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" components={Page}>
            <IndexRoute component={Main} />
            <Route path="ar" component={MainAr} />
        </Route>
    </Router>,
    document.getElementById('app')
);
