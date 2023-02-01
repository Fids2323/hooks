import React from 'react'
import CardWrapper from '../../common/card'

const withPropsStyles = (Component) => (props) => {
  return (
    <CardWrapper>
      <Component {...props} name='new Name' />
    </CardWrapper>
  )
}

export default withPropsStyles
