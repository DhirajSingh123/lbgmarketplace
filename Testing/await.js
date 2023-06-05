let names = ["abhi", "jimmy", "jems"];

//This approach is called call back approach to solve particuler dependency situation

 let getNames = () => {
  setTimeout(() => {
    names.forEach((data) => {
      console.log(data);
    });
  }, 1000);
};

function setName(input) {
  let status = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      names.push(input);
      if (status) {
        resolve();
      } else {
        console.log("something went wrong");
        reject();
      }
    }, 3000);

    console.log("shubhanshu paratha khaya");
  });
}

async function getResult() {
  try {
    await setName("Ankit");
     getNames()
  } catch (error) {
    console.log(error);
  }
 
}



 getResult();
