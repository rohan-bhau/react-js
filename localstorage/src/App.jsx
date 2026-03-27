import React from 'react'

const App = () => {
  const name = "Rohan";
  const boyosh = 19;
  localStorage.setItem("user", name); //?  this method helps to set any value to the local storage
  localStorage.setItem("age", boyosh); //?  this method helps to set any value to the local storage

  const a = localStorage.getItem('a'); //? this method helps to get any element from the local storage
  console.log(a);
  console.log(localStorage.getItem('user'))

  localStorage.removeItem('a') //? this method helps to remove any element from the local storage


  const users = {
    1: 'Rohan',
    2: 'Bhau',
    3:'Aru',
    4:'Arna'
  }
  
  localStorage.setItem("users", JSON.stringify(users)); //? this method helps to store any object to the local storage in a stringify method because local storage cannot store any object data, so ata first we need to stringify it.

  const users2 = JSON.parse(localStorage.getItem('users'))  //? this method helps to get the  saved object from the localstorage, we stored the object as a string so we need to pasre it so that it becomes object again
  console.log(users2)

  return <div>App</div>;
}

export default App
