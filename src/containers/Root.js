import React, { Component, PropTypes } from 'react'
import {IntlProvider} from 'react-intl'

import {loadLocale, Selector} from '../components/Locales'

import App from './App'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: '',
      messages: {}
    }
    this.loadLocale('en')
  }

  loadLocale = (locale) => {
    loadLocale(locale)
      .then((data) => {
        let messages = data[locale]
        this.setState({locale,messages})
      }).catch(function(ex) {
        console.log('locale loading failed', ex)
      })
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        <App
          locale={this.state.locale}
          onChangeLocale={this.loadLocale}
        />
      </IntlProvider>
    )
  }
}

export default Root