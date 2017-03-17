import React, {Component} from 'react'

import 'whatwg-fetch'

import locales from './locales'


const loadLocale = (locale) => {
  return fetch(locales[locale])
  .then(function(response) {
    return response.json()
  })
}

export Selector from './Selector'
export {locales, loadLocale}
