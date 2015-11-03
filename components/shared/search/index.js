import React from 'react';
import Base from '../../base';

class Search extends Base {

  constructor () {
    super();
    this.displayName = 'Search';
  }

  /*onSubmit (e) {
    e.preventDefault();

    let query = this.props.cursor.get('query');

    if(query === '') {
      alert('Empty search!!!!')
    }
  }

  onChange (e) {
    let value = e.target.value;

    this.props.cursor.update('query', function () {
      return value;
    });
  }*/

  render () {

    return (
      <div id="global-search">
        <form>
          <label>Search</label>
          <input type="input" placeholder="I'm looking for"  defaultValue={this.props.data.query} ref="searchBox"/>
          <button type="submit" name="submit-search" >Search</button>
        </form>
      </div>  
    );
  }

}

export default Search;