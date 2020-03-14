function image_builder(){
  let div = document.createElement('img');
  div.alt = "arumugaa";
  div.src = "./shot1.png";
  div.id = "howle_image"
  document.querySelector('body').appendChild(div);
}

export default image_builder;