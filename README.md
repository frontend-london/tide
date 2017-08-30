# Pubs and Restaurants in Neighbourhood

## Overview

Angular app which retrieves data about pubs and restaurants in close proximity to the user's location (or White Bear Yard if no location is available). 

Information about places is fetched from  Google Places API.

Live demo: https://enside.pl/projects/tide/

## No results - daily query limit exceeded
Sometimes app is not showing places. This is happening, if Google Places API daily limit of queries has been exceeded. To continue, you need to wait few hours or you can switch to json file - change settings in app.condig.js to:

```
addressApi      : 'api/address.json',
placeApi        : 'api/place.json',
placesApi       : 'api/places.json',
```

## Changing sample JSON to real API

By default app is showing static data from json files located in app/api/ folder. It's working like this, to easily demonstrate the applicaton. For real API connection, you need to either use PHP proxy server or allow CORS (Cross Origin Request Security) in your browser.

### Solution 1 - PHP proxy server:

To run PHP proxy, you need to change settings in app.condig.js to:

```
addressApi      : 'proxy/address.php',
placesApi       : 'proxy/places.php',
placeApi        : 'proxy/place.php',
```

Then you need to install application somewhere inside htdocs/ folder of apache, and then in your browser go to that folder inside http://localhost/ . Note that, in  server run by command 'npm start' on localhost:8000/ PHP is not working. For Windows, Linux and MAc I recommend Xampp - https://www.apachefriends.org/download.html 

### Solution 2 - Browser extension

By default in Chrome and Firefox you won't be able to connect from localhost to Google Places API because of CORS error. To change it, you can install addon to Chrome or Firefox:

- Firefox addon: https://addons.mozilla.org/en-Gb/firefox/addon/cors-everywhere/
- Chrome extension: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

Then you need to update application settings in app.config.js to:

```
addressApi   : 'https://maps.googleapis.com/maps/api/geocode/json',
placesApi    : 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
placeApi     : 'https://maps.googleapis.com/maps/api/place/details/json',
```

## Development with `localPlacesApp`

The following docs describe how you can test and develop this application further.

### Installing Dependencies

The application relies upon various Node.js tools, such as Bower and Karma. You can install these by running:

```
npm install
```

This will also run Bower, which will download the Angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application 
  running.

### Unit Testing

For unit testing I'm using Jasmine and Karma libraries

- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  api/...                --> static JSON files with places data (used to fake a backend API)
  bower_components/...   --> 3rd party JS/CSS libraries, including Angular and jQuery
  css/...                --> stylesheet files
  core/                  --> all the source code of the core module (stuff used throughout the app)
    address/...          --> files for the `address` filter, including JS source code, specs
    dayofweek/...        --> files for the `dayofweek` filter, including JS source code, specs
    place/...            --> files for the `core.place` submodule, including JS source code, specs
    places/...           --> files for the `core.places` submodule, including JS source code, specs
    ratingformatted/...  --> files for the `ratingformatted` filter, including JS source code, specs
    timeformatted/...    --> files for the `dayofweek` filter, including JS source code, specs
    typeformatted/...    --> files for the `typeformatted` filter, including JS source code, specs
    core.module.js       --> the core module
  img/...                --> image files
  place-detail/...       --> files for the `placeDetail` module, including JS source code, HTML templates, specs
  place-list/...         --> files for the `placeList` module, including JS source code, HTML templates, specs
  proxy/...              --> PHP proxy to Google Places API
  app.animations.js      --> hooks for running JS animations with `ngAnimate`
  app.config.js          --> app-wide configuration of Angular services
  app.module.js          --> the main app module
  app.routing.js         --> app routing configuration
  index.html             --> app layout file (the main HTML template file of the app)

node_modules/...         --> development tools (fetched using `npm`)

bower.json               --> Bower specific metadata, including client-side dependencies
karma.conf.js            --> config file for running unit tests with Karma
package.json             --> Node.js specific metadata, including development tools dependencies
```


## Author

Made by Piotr Kołodziejczyk, August 2017

Contact: 

Email    : contact@frontend.london

Website  : http://frontend.london

github   : https://github.com/frontend-london

linkedin : http://lnkd.in/XnUu2m
