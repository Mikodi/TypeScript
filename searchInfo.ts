/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchFormData } from './searchFormInterface.js'
import { renderSearchFormBlock } from './search-formBlock.js'


export function searchInfo() {
  const inputIn: any = document.getElementById('check-in-date');
  const inputOut: any = document.getElementById('check-out-date');
  const maxPrice: any = document.getElementById('max-price');
  const searchForm = document.getElementById('search-form');


  searchForm.onsubmit = (event) => {
    event.preventDefault();
    const SearchFormInfo: SearchFormData = {
      city: 'Санкт-Петербург',
      checkInDate: new Date(inputIn.value),
      checkOutDate: new Date(inputOut.value),
      priceLimit: Number(maxPrice.value)
    }

    renderSearchFormBlock(SearchFormInfo);
  }
}