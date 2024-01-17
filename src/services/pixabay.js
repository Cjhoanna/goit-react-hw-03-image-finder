function fetchImages(keyword,page) {
  return fetch(
    `https://pixabay.com/api/?q=${keyword}&page=${page}&key=41800189-168330d33db8ee1b25c9b2fd0&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response=>{
    if(response.ok){
        return response.json();
    }
    return Promise.reject(new Error(`No images for keyword ${keyword}`))
  });
}

export default fetchImages; 