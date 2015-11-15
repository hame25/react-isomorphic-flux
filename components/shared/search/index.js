import React from 'react';
import Base from '../../base';
import actions from '../../../actions';

class Search extends Base {

  constructor () {
    super();
    this.displayName = 'Search';
  }

  onSubmit (e) {
    e.preventDefault();

    let query = this.props.data.get('query');

    if(query === '') {
      alert('Empty search!!!!')
    }
  }

  onChange (e) {
    let value = e.target.value;

    actions.updateSearchQuery(value);
  }

  render () {

    return (
      <div id="global-search">
        <form>
          <label>Search</label>
          <input type="input" placeholder="I'm looking for"  defaultValue={this.props.data.get('query')} onChange={this.onChange.bind(this)}
           ref="searchBox"/>
          <button type="submit" name="submit-search"  onClick={this.onSubmit.bind(this)}>Search</button>
        </form>
      </div>  
    );
  }

}

export default Search;