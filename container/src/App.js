import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
            <a href="/app1">App1</a>
            <a href="/app2">App2</a>
        </Header>
        <Switch>
            <Route exact path='/app1' component={App1} />
            <Route exact path='/app2' component={App2} />
        </Switch>
    </Fragment>
</BrowserRouter>;

export default App;
