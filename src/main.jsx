import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//...
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://e65068583471402565b0d2ba8f14bef5@o4507668951269376.ingest.us.sentry.io/4507668954939392',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect
    })
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// SENTRY_AUTH_TOKEN =
//   sntrys_eyJpYXQiOjE3MjIwMTAwNjQuMjA2MjI0LCJ1cmwiOiJodHRwczovL3NlbnRyeS5pbyIsInJlZ2lvbl91cmwiOiJodHRwczovL3VzLnNlbnRyeS5pbyIsIm9yZyI6ImZyZWVsYW5jZXItMWsifQ ==
//   _ycbiTElgz4HolcH6ytjX4895E96DTRkn / Kj40L9aENg
