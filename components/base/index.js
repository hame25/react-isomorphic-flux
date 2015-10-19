import React from 'react';
import shallowEqual from 'shallowequal';

//review and test this properly!!!

class Base extends React.Component {
  
  shouldComponentUpdate (nextProps, nextState) {
      console.log('Rerender ' + this.displayName + '?')
      if(nextProps.cursor !== undefined && (nextProps.cursor.deref() !== this.props.cursor.deref())) {
        console.log('*** Render ' + this.displayName + ' cursor ***');
        return true
      }

      return false;
   }
}

export default Base;