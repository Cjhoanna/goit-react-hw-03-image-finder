import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

function ImageGallery({ data, styles }) {
  return (
    <ul className={styles.ImageGallery}>
      {data.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          src={webformatURL}
          largeSrc={largeImageURL}
          styles={styles}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
