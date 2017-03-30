import React, {Component, PropTypes} from 'react'
import {FormattedMessage} from 'react-intl'

import Welcome from 'component-intl-welcome'
import {} from 'component-intl-welcome/locales'

import Text from '../components/Text'
import {locales,Selector} from '../components/Locales'
import DateTime from '../components/DateTime'


const App = ({locale,onChangeLocale}) => (
  <div className="main-content">
    <h1><Text id='main-page.title' /></h1>
    <Text markdown id='main-page.intro-top'/>

    <hr/>

    <Text id='main-page.select-language' />: &nbsp;
    <Selector locale={locale} onChange={onChangeLocale}/>
    <p/><DateTime/>
    <p/><Text id='main-page.locale-file' />: &nbsp;
    {locales[locale]}

    <hr/>

    <h3>"Welcome" - <Text id='main-page.welcome-component' />:</h3>
    <Welcome/>
    <hr/>
    <Text markdown id='main-page.intro-bottom'/>
  </div>
)

App.propTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLocale: PropTypes.func.isRequired
}

export default App