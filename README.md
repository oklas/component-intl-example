# Demonstration Application

This is demonstration application with minimal amount of dependencies
to demonstrate how to build and configure application and libraries
with support of internationalization according to
**[component approach](https://github.com/oklas/component-intl)**

The application consists of several components with its own locales,
including one exported from an external library.
Sources of application included of three set of locale data:

* general application locale data set (folder [./src/locales](./src/locales))
* own locale data set of one of the application components (folder
  [./src/components/Locales/locales](./src/components/Locales/locales))
  to demonstrate component approach
* locale data set imported from
  [external demonstrational library](https://github.com/oklas/component-intl-welcome/)
  to demonstrate component approach and how to configure application and
  library and how it works

Running application after building stage have only one merged set of locale
data files.

The additional helper Component `Text` is used to encapsulating root of tree
and also it is used for additional markdown text preprocessing.

The [locales](./src/components/locales) component namespace contain code which
prepare data required by `IntlProvider` and prepare locales to loading itself.
It is a place where locale data built by
[intl-webpack-plugin](https://github.com/oklas/intl-webpack-plugin)
is loaded. (See
[./webpack.config.js](./webpack.config.js)).
Also the `loadLocale` funcion and the locale `Selector` component are
exported from here. 

This example application is

 * [running here](https://oklas.github.io/component-intl-example/)

Source code of used external component `Welcome` with its own exported locales
is here:

 * [component-intl-welcome](https://github.com/oklas/component-intl-welcome/)