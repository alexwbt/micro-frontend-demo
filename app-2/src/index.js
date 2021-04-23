import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.microFrontends = {
    ...window.microFrontends,
    'app-2': {
        mount: container => ReactDOM.render(<App/>, container),
        unmount: container => ReactDOM.unmountComponentAtNode(container)
    }
};
