import React from 'react'
import {FormattedMessage} from 'react-intl'

import locales from './locales'

const Selector = (props) => (
  <select value={props.locale} onChange={(ev)=>props.onChange(ev.target.value)}>
    { Object.keys(locales).map( (lang,i) => {
      return (
        <FormattedMessage id={'app.locales.name.'+lang} key={lang+ '-' + i}>
          {(message) => <option value={lang} key={i}>{message}</option>}
        </FormattedMessage>
      )
    } ) }
  </select>
)

export default Selector