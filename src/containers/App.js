import React, {Component, PropTypes} from 'react'
import {FormattedMessage} from 'react-intl'

import Welcome from 'component-intl-welcome'


import {Selector} from '../components/Locales'
import DateTime from '../components/DateTime'

const App = ({locale,onChangeLocale}) => (
  <div>
    <h1><FormattedMessage id='app.main-page.title' /></h1>
    <hr/>
    <FormattedMessage id='app.main-page.select-language' />: &nbsp;
    <Selector locale={locale} onChange={onChangeLocale}/>
    <p/>
    <DateTime/>
  </div>
)

App.propTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLocale: PropTypes.func.isRequired
}

export default App