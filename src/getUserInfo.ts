export function getUserData() {
  const userInfo = {
    userName: 'Elena',
    userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
  }

  const _userInfo = JSON.stringify(userInfo);
  localStorage.setItem('user', _userInfo);
  const returnInfo = JSON.parse(localStorage.getItem('user'));
  const returnName: string = returnInfo.userName;
  const returnAvatar: string = returnInfo.userAvatar
  return [returnName, returnAvatar];

}

export function getFavoritesAmount() {
  const favoriteAmount = {
    amount: 3,
  }

  const _favoriteAmount = JSON.stringify(favoriteAmount);
  localStorage.setItem('favoritesAmount', _favoriteAmount);
  const returnAmount = JSON.parse(localStorage.getItem('favoritesAmount'));

  return returnAmount.amount;

}