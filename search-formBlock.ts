import { renderSearchResultsBlock } from './search-results.js';
import { renderSearchResultsBlockSdk } from './search-results.js';


const searchDiv = document.getElementById('search-results-block');
const searchBlock = document.getElementById('results-list');
const checkStandart: object = document.getElementsByClassName('standart');
const checkFlatRent: object = document.getElementsByClassName('flat_rent');


export function renderSearchFormBlock(SearchFormInfo) {

  searchDiv.innerHTML = '';
  searchBlock.innerHTML = '';

  if (checkStandart[0].checked && checkFlatRent[0].checked === true) {
    renderSearchResultsBlock ();
    renderSearchResultsBlockSdk(SearchFormInfo)
  }
  else if (checkFlatRent[0].checked === true && checkStandart[0].checked !== true) {
    renderSearchResultsBlockSdk(SearchFormInfo)
  } else {
    renderSearchResultsBlock ();
  }


  console.log(SearchFormInfo);
  
  
  
}


// function favoriteItem () {
//   const favoritesItem = document.querySelector('favorites');
//   favoritesItem.addEventListener('click', (event) => {
//     event.preventDefault();
//     toggleFavoriteItem(event);
//   })
// }
