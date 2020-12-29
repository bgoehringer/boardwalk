import * as React from 'react'
import { Route } from 'react-router'
import Layout from './components/Layout'
import Cart from './pages/Cart'
import Store from './pages/Store'

import './custom.css'

export default () => (
    <Layout>
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
    </Layout>
)
