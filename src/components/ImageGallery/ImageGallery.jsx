import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

function ImageGallery({data}) {
  return (
    <ul className="gallery">
     {data.map(({id,webformatURL,largeImageURL})=>(
      <ImageGalleryItem key={id} id={id} src={webformatURL} largeSrc={largeImageURL}/>
     ))}
    </ul>
  );
}

export default ImageGallery;
