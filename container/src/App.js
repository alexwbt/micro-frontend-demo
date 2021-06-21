import { Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MicroContainer from './MicroContainer';

const Header = styled.div`
    margin-bottom: 20px;
    > * {
        padding: 10px;
    }
`;

const App1 = () => <MicroContainer name="app-1" origin="http://localhost:3001/" />
const App2 = () => <MicroContainer name="app-2" origin="http://localhost:3002/" />
const App3 = () => <div><App1 /><App2 /></div>;

const App = () => <BrowserRouter>
    <Fragment>
        <Header>
            <Link to="/">Home</Link>
            <Link to="/app1/app1">App1</Link>
            <Link to="/app2/app1">App2</Link>
            <Link to="/app3/app1">App3</Link>
        </Header>
        <Switch>
            <Route path='/app1' component={App1} />
            <Route path='/app2' component={App2} />
            <Route path='/app3' component={App3} />
        </Switch>
    </Fragment>
</BrowserRouter>;

export default App;
