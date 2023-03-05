import React from 'react';
import { Item, Img } from './ImageGalleryItem.styled';

export const ItemImg = ({ webformatURL, tags, largeImageURL, onClick }) => {
  return (
    <Item onClick={onClick}>
      <Img src={webformatURL} alt={tags} name={largeImageURL}/>
    </Item>
  );
};
