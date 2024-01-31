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
    const { styles } = this.props;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-label']}></span>
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="keyword"
            value={this.state.keyword}
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
