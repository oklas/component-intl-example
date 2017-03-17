import React, {Component, PropTypes} from 'react'
import {
  FormattedRelative,
  FormattedDate,
  FormattedTime
} from 'react-intl'

const DateTime = () => (
  <div>
    <FormattedRelative value={Date.now()} units='day'/>: &nbsp;
    <FormattedDate value={Date.now()}/> &nbsp;
    <FormattedTime value={Date.now()}/> &nbsp;
  </div>
)

export default DateTime