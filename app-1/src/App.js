import { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const Header = styled.div`
    margin-bottom: 20px;
    > * {
        padding: 10px;
    }
`;

const App1 = () => <div>App 1.1</div>;
const App2 = () => <div>App 1.2</div>;
const App3 = () => <div>App 1.3</div>;

const App = () => <BrowserRouter>
    <Fragment>
        <Header>
            <Link to="/app1/app1">Sub App 1.1</Link>
            <Link to="/app1/app2">Sub App 1.2</Link>
            <Link to="/app1/app3">Sub App 1.3</Link>
        </Header>
        <Switch>
            <Route exact path='/app1/app1' component={App1} />
            <Route exact path='/app1/app2' component={App2} />
            <Route exact path='/app1/app3' component={App3} />
        </Switch>
    </Fragment>
</BrowserRouter>;

export default App;
