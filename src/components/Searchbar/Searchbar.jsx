import { Component } from 'react';

class Searchbar extends Component {
  state = { keyword: '' };
  handleSearchChange = event => {
    this.setState({ keyword: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.keyword.trim() === '') {
      alert('Enter a search word');
      return;
    }
    this.props.onSubmit({ ...this.state });
    this.setState({ keyword: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name='keyword'
            value={this.state.keyword}
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
