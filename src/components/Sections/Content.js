import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import { HomePage, ContributePage, StyleguidesPage, AppsPage } from '../Pages'
import documentationRoutes from '../Documentation'

const LibraryContent = () => (
    <Layout style={{ background: '#fff' }}>
        <Layout.Content style={{ margin: '24px 16px 0', background: '#fff' }}>
            <div style={{ padding: "15px 30px 50px 30px", background: '#fff', minHeight: 360 }}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/styleguides" component={StyleguidesPage} />
                    <Route exact path="/contribute" component={ContributePage} />
                    <Route exact path="/applications" component={AppsPage} />
                    {documentationRoutes.map(route => (
                        <Route
                            key={route.url}
                            exact
                            path={`/${route.url}`}
                            component={route.component}
                        />
                    ))
                    }
                </Switch>
            </div>
        </Layout.Content>
    </Layout>
)

export default LibraryContent