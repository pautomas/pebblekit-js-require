PebbleKit JS with require()
===========================

This is just a sample app to show how to use the loader library from [Pebble.js](https://github.com/pebble/pebblejs) in PebbleKit JS apps.

This helps modularize complex applications instead of having all the code a huge ```js/pebble-js-app.js``` file and also allows to use external javascript libraries in a clean way.

## Usage

Create a project using the [Pebble SDK](https://developer.getpebble.com/sdk/) with ```pebble new-project --javascript``` and:

* Replace the ```wscript``` file with the one from this repository.
* Replace the whole ```js``` folder with the one from this repository.

The main javascript file of your project is now ```main.js```, there's no need to use ```pebble-js-app.js``` as it will be automatically generated when the project is built.

## How to import external modules

All the most popular Javascript libraries include support for ````require()```. That means that including them in your project is as simple as:

* Download the library ```.js``` file and copy it into the ```js``` folder of your project.
* Add a require statement at the top of ```main.js``` (or any file that is going to use the module). For example, assuming that the library file is called ```external_module.js```:
  - ```var ExternalModule = require('external_module');```

Now the imported library can be referenced using ```ExternalModule```.

### Example

To use the [Lodash](https://lodash.com/) library, if we download and place the ```lodash.js``` file in ```src/js/vendor/``:

```
// Import lodash into a variable called _
var _ = require("vendor/lodash");

Pebble.addEventListener("ready",
    function(e) {
      // Use _ to call a function of lodash
      console.log(_.keys({ "key 1" : 1, "key 2" : 2}));
    }
);
```

## Creating your own modules

Splitting your app in modules is easy, just create a new javascript file in the ```js``` folder.

In that file, ```module.exports``` can be used to assign any variable and/or function that you want to be published to whoever requires your module.

Any function or variable that isn't assigned to ```module.exports``` will not be accessible to other modules, even if they require yours.

```require``` can be used inside your module to import other modules.

For an example of a module exposing "static" functions check [logger.js](src/js/logger/logger.js).
