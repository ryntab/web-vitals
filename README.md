# Nuxt Web Vitals

> Web Vitals: Essential module for a healthy [Nuxt.js](https://github.com/nuxt/nuxt.js)

[Web Vitals](https://web.dev/vitals) is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.
This module will gather those metrics on each page view, and send them to a provider using either [`Navigator.sendBeacon()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) or [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Installation

```bash
# yarn
yarn add --dev @nuxtjs/web-vitals

# npm
npm install --save-dev @nuxtjs/web-vitals
```

Add `@nuxtjs/web-vitals` to the `buildModules` section of your `nuxt.config.js`

```javascript
export default {
  buildModules: [
    '@nuxtjs/web-vitals'
  ]
}
```

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--save-dev` or `--dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

## Options

```js
{
  webVitals: {
    // provider: '', // auto detectd
    debug: false,
    disabled: false
  }
}
```

## Providers

### Google Analytics

_Report WebVitals to GA_

Create a GA property and get `trackingID`

Either provide `GOOGLE_ANALYTICS_ID` environement variable or set inside `nuxt.config`:

(Top level `googleAnalytics.id` is supported for backward compatibility as fallback)

```js
export default {
  webVitals: {
    ga: { id: 'UA-XXXXXXXX-X' }
  }
}
```

Behavior > Events > Overview > Event Category > Event Action

![Events Actions](/assets/event-action.png)


### Vercel Analytics

_Report WebVitals to Vercel_

Works without configuration

### Basic logger

_Report WebVitals to Console_

Output metrics to the console insead of sending them to a remote provider

```js
{
  webVitals: {
    provider: 'log',
    debug: true, // debug enable metrics reporting on dev environments
    disabled: false
  }
}
```

:warning: this provider does not send WebVitals trough network, issues with navigator extensions can not be deteced with this method.

### Logging to custom api

_Report WebVitals to a custom api endpoint_

```js
export default {
  webVitals: {
    provider: 'api',
    api: { url: '/api/web-vitals' }
    debug: true // debug enable metrics reporting on dev environments
  }
```

Example body:

```js
{
  href: 'http://localhost:3000/',
  name: 'LCP',
  value: 303.599,
  rating: 'good',
  delta: 303.599,
  entries: [
    {
      name: '',
      entryType: 'largest-contentful-paint',
      startTime: 303.599,
      duration: 0,
      size: 5698,
      renderTime: 303.599,
      loadTime: 0,
      firstAnimatedFrameTime: 0,
      id: '',
      url: ''
    }
  ],
  id: 'v3-1669725914225-9792921995831',
  navigationType: 'reload'
}
```

### License

[MIT](https://opensource.org/licenses/MIT)
