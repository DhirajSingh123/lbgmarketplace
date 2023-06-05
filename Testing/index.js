let names = ["abhi", "jimmy", "jems"];


//This approach is called call back approach to solve particuler dependency situation

// function getNames() {
//   setTimeout(() => {
//     for (let index = 0; index < names.length; index++) {
//       const element = names[index];
//       console.log(element);
//     }
//   }, 1000);
// }

function setName(input,callBack) {
  setTimeout(() => {
    names.push(input);
     callBack();
  }, 2000);
}

setName("elengo",()=>{
  setTimeout(() => {
    for (let index = 0; index < names.length; index++) {
      const element = names[index];
      console.log(element);
    }
  }, 1000);
});






