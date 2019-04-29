import React from 'react';

function RandomImgCard() {
  let imgs = [
    'https://cdn.thewirecutter.com/wp-content/uploads/2018/06/cataccessories-lowres-2x1-05916.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
    'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBjnCHmg6X7YGEZ4vY_sYT1bcYtwzFYDFujnWyyOhCmzuV_421w'
  ]
  let randomIndex = Math.floor(Math.random()*imgs.length)
  return (
    <img src={imgs[randomIndex]} className="RandomImgCard" alt="Test" />
  );
}
export default RandomImgCard;
