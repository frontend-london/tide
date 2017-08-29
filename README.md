# Pubs and Restaurants in Neighbourhood

## Overview

Angular app which retrieves data about pubs and restaurants in close proximity to the user's location (or White Bear Yard if no location is available). 

Information about places is fetched from  Google Places API.

# Cross Origin Request Security (CORS) error in Chrome and Firefox

By default in Chrome and Firefox you won't be able to see places because of CORS error. To fix it, I recommend installing addon to Chrome or Firefox:

- Firefox addon: https://addons.mozilla.org/en-Gb/firefox/addon/cors-everywhere/
- Chrome extension: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

Another solution is to install simple proxy on a server (for example http://benalman.com/projects/php-simple-proxy/) but I didn't include it in a project.

Another solution is to used sample data instead.

# Using sample data

Instead of connecting to Google Places API, you can use provided sample data. To do that, you just need to uncomment paths in file app.config.js, so it will look like:

...
addressApi      : 'api/address.json',
placesApi       : 'api/places.json',
placeApi        : 'api/place.json',
...
imagePath       : 'img/photo.jpg'
...

## Development with `localPlacesApp`

The following docs describe how you can test and develop this application further.

### Installing Dependencies

The application relies upon various Node.js tools, such as [Bower][bower] and [Karma][karma]. You can install these by running:

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

For unit testing I'm using [Jasmine][jasmine] and [Karma][karma] libraries

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
  core/                  --> all the source code of the core module (stuff used throughout the app)
    address/...          --> files for the `address` filter, including JS source code, specs
    dayofweek/...        --> files for the `dayofweek` filter, including JS source code, specs
    place/...            --> files for the `core.place` submodule, including JS source code, specs
    places/...           --> files for the `core.places` submodule, including JS source code, specs
    timeformatted/...    --> files for the `dayofweek` filter, including JS source code, specs
    core.module.js       --> the core module
  img/...                --> image files
  place-detail/...       --> files for the `placeDetail` module, including JS source code, HTML templates, specs
  place-list/...         --> files for the `placeList` module, including JS source code, HTML templates, specs
  app.animations.css     --> hooks for running CSS animations with `ngAnimate`
  app.animations.js      --> hooks for running JS animations with `ngAnimate`
  app.config.js          --> app-wide configuration of Angular services
  app.css                --> default stylesheet
  app.module.js          --> the main app module
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
