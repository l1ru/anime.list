import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes'

import {AnimeListProvider} from './providers/Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
        <AnimeListProvider>
            <Routes/>
        </AnimeListProvider>
    </Router>
)
