/* --------GETTING JSON FILES FROM DATA.JSON----- */
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let workArray = [];

    /* const  */
    for(let i in data){
      document.querySelector(".h" + i).innerText = data[i].timeframe[i].current;  
    }
    console.log(workArray);
  });
