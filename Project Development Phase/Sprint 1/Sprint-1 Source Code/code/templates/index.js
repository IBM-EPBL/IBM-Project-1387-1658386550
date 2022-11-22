import { SpeechProvider } from '@speechly/react-client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from './context/context';
import './index.css';

ReactDOM.render(
	<SpeechProvider appId="73edc81a-bf3a-4042-a698-fe90c3934099" language="en-US" >
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,
    document.getElementById('root')
);