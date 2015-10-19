export default {

	shouldComponentUpdate: function (nextProps) {

      if(nextProps.cursor.deref() !== this.props.cursor.deref()) {

      	console.log('*** Render ' + this.constructor.displayName + ' ***');
        return true
      }
      return false;
   }
}