import character from './Bowman.js';


export default function getSpecialAttack(character) {
    const special = [...character.special];
    special.forEach((attack, ind) => {
        special[ind] = {...attack}
        if (!('description' in attack)) {
          special[ind].description = 'Описание недоступно';
        }
    })
    console.log(special);
  
    return special;
  }