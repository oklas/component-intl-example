import React, {Component, PropTypes} from 'react'
import {FormattedMessage} from 'react-intl'

import Welcome from 'component-intl-welcome'
import {} from 'component-intl-welcome/locales'

import Text from '../components/Text'
import {locales,Selector} from '../components/Locales'
import DateTime from '../components/DateTime'


const App = ({locale,onChangeLocale}) => (
  <div>
    <h1><FormattedMessage id='app.main-page.title' /></h1>
    <Text id='main-page.intro-top'/>
    <hr/>
    <FormattedMessage id='app.main-page.select-language' />: &nbsp;
    <Selector locale={locale} onChange={onChangeLocale}/>
    <p/>
    <DateTime/>
    <p/>
    <FormattedMessage id='app.main-page.locale-file' />: &nbsp;
    {locales[locale]}
    <hr/>
    <h3>"Welcome" - <FormattedMessage id='app.main-page.welcome-component' />:</h3>
    <Welcome/>
    <hr/>
    <Text id='main-page.intro-bottom'/>
  </div>
)

App.propTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLocale: PropTypes.func.isRequired
}

export default App