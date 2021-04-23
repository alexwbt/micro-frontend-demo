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

const App1 = () => <MicroContainer name="app-1" host="http://localhost:3001/" />
const App2 = () => <MicroContainer name="app-2" host="http://localhost:3002/" />

const App = () => <BrowserRouter>
    <Fragment>
        <Header>
            <Link to="/app1">App1</Link>
            <Link to="/app2">App2</Link>
        </Header>
        <Switch>
            <Route exact path='/app1' component={App1} />
            <Route exact path='/app2' component={App2} />
        </Switch>
    </Fragment>
</BrowserRouter>;

export default App;
