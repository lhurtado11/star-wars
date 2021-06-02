import {category} from '@/methods/category.js'
export function open (value) {
  let folder = [];
  const random = Math.floor(Math.random() * (6 - 1)) + 1; 
  let randomCategory;

  console.log(random);
  if(random <=3) {
    randomCategory = Math.floor(Math.random() * (6 - 1)) + 1;
    folder.push({
      info: value.film[randomCategory-1],
      num: randomCategory,
      category: 'Especial',
      type: 'film'
    });
    for(let i=0; i<3; i++){
      randomCategory = Math.floor(Math.random() * (82 - 1)) + 1;
      folder.push({
        info: value.people[randomCategory-1],
        num: randomCategory,
        category: category('people', randomCategory),
        type: 'people'
      });
    };
  
    randomCategory = Math.floor(Math.random() * (36 - 1)) + 1;
    folder.push({
      info: value.starship[randomCategory-1],
      num: randomCategory,
      category: category('starship', randomCategory),
      type: 'starship'
    });
  } else {
    for(let i=0; i<3; i++){
      randomCategory = Math.floor(Math.random() * (82 - 1)) + 1;
      folder.push({
        info: value.people[randomCategory-1],
        num: randomCategory,
        category: category('people', randomCategory),
        type: 'people'
      });
    };
    for(let i=0; i<2; i++){
      randomCategory = Math.floor(Math.random() * (36 - 1)) + 1;
      folder.push({
        info: value.starship[randomCategory-1],
        num: randomCategory,
        category: category('starship', randomCategory),
        type: 'starship'
      });
    };
  } 
  return folder
};

// export function discard (dataAlbum, elem) {
//   if(elem.type === 'film'){
//     return dataAlbum.filmAlbum.includes(elem.num-1)
//   } else if (elem.type === 'people'){
//     return dataAlbum.peopleAlbum.includes(elem.num-1)
//   } else {
//     return dataAlbum.starship.includes(elem.num-1)
//   }
// };
