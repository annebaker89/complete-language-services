var React = require('react');
var ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

var Page = require('Page');
var Main = require('Main');
var MainAr = require('MainAr');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('applicationStyles');

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
    <Router history={appHistory}>
        <Route path="/" components={Page}>
            <IndexRoute component={Main} />
            <Route path="ar" component={MainAr} />
        </Route>
    </Router>,
    document.getElementById('app')
);
