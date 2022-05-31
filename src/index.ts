import { getUserData } from './getUserInfo.js'
import { getFavoritesAmount } from './getUserInfo.js'
import { renderFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {

  const [userName, userAvatar] = getUserData();
  const favoriteItemsAmount: number = getFavoritesAmount()

  renderUserBlock(userName, userAvatar, favoriteItemsAmount);
  renderFormBlock();
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
  
})




  
