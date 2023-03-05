import React from 'react';
import { GalleryUl } from './ImageGallery.styled';
import { ItemImg } from '../';

export const Gallery = ({ images, onClick }) => {
  return (
    <GalleryUl>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return <ItemImg key={id} webformatURL={webformatURL} tags={tags} largeImageURL={largeImageURL} onClick={onClick}/>;
      })}
    </GalleryUl>
  );
};
