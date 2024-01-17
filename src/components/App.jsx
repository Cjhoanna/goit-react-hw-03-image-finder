import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from 'services/pixabay';
import Loader from './Loader/Loader';
import Button from './Button/Button';

class App extends Component {
  state = {
    images: [],
    searchword: '',
    pageNumber: 1,
    pageTotal: '',
    status: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchword, pageNumber } = this.state;
    const prevWord = prevState.searchword;
    const nextWord = searchword;
    const prevPage = prevState.pageNumber;
    const nextPage = pageNumber;

    if (prevWord !== nextWord) {
      this.setState({status:"LOADING"})
      const newImage = fetchImages(nextWord, pageNumber);
      newImage
        .then(data => {
          if (data.total === 0) {
            this.setState({ status: 'ERROR' });
          } else {
            const newData = data.hits.map(
              ({ id, webformatURL, largeImageURL }) => ({
                id,
                webformatURL,
                largeImageURL,
              })
            );
            console.log(newData);
            this.setState({
              images: newData,
              status: 'OK',
              pageTotal: data.totalHits,
            });
          }
        })
        .catch(() => {
          this.setState({ status: 'ERROR' });
        });
    }

    if (prevPage !== nextPage && prevWord === nextWord) {
      this.setState({status:"LOADING"})
      const newImage = fetchImages(nextWord, pageNumber);
      newImage
        .then(data => {
          const newData = data.hits.map(
            ({ id, webformatURL, largeImageURL }) => ({
              id,
              webformatURL,
              largeImageURL,
            })
          );
          console.log(newData);
          this.setState(prevState => ({
            images: [...prevState.images, ...newData],
            status: 'OK',
          }));
        })
        .catch(() => {
          this.setState({ status: 'ERROR' });
        });
    }
  }

  submitHandler = ({ keyword }) => {
    const { searchword } = this.state;
    if (searchword !== keyword) {
      this.setState({ searchword: keyword, pageNumber: 1, images: [] });
    } else {
      this.setState({ searchword: keyword });
    }
  };

  handleIncrement = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  lastPageDef = () => {
    const { pageTotal } = this.state;
    let lastPage = Number(pageTotal % 12);
    if (lastPage === 0) {
      return (lastPage = Number(pageTotal / 12));
    } else {
      return (lastPage = Number.parseInt(pageTotal / 12) + 1);
    }
  };

  render() {

    const {searchword,pageNumber,pageTotal,status,images}= this.state;
    const lastPage=this.lastPageDef();
    return (
      <div>
        <Searchbar onSubmit={this.submitHandler} />
        <ImageGallery data={images}/>
        {status==="ERROR"&&(<p>No images for keyword "{searchword}"</p>)}
        {status==="LOADING"&& <Loader/>}
        {status==="OK" && images.length >11 && pageNumber!== lastPage &&(
          <Button onClick={this.handleIncrement}/>
        )}
        {pageNumber=== lastPage && pageTotal>0 && (<p>You've reached the end of search results</p>)}
      </div>
    );
  }
}

export default App;
