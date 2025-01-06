import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import PropTypes from 'prop-types'
import { GiftedChatContext } from '../GiftedChatContext'

class Context extends React.Component {
  static propTypes = {
    children: PropTypes.element,
  }

  getContext() {
    return {
      actionSheet: () => ({
        showActionSheetWithOptions: () => {},
      }),
      getLocale: () => 'en',
    }
  }
  render() {
    return (
      <GiftedChatContext.Provider value={this.getContext()}>
        {this.props.children}
      </GiftedChatContext.Provider>
    )
  }
}

export default function createComponentWithContext(children: any) {
  return renderer.create(<Context>{children}</Context>)
}
