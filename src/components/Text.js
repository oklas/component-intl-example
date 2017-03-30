import React, {Component, PropTypes} from 'react'
import Markdown from 'react-markdown';
import {FormattedMessage} from 'react-intl'

const Text = (props) => (
  props.markdown ?
    <FormattedMessage {...props} id={'app.'+props.id}>
      {(message) => <Markdown source={message} escapeHtml={true}/>}
    </FormattedMessage>
    :
    <FormattedMessage {...props} id={'app.'+props.id}/>
)

Text.propTypes = {
  id: PropTypes.string.isRequired
}

export default Text
