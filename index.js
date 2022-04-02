
/* -----------------TOGGLING ACTIVE CLASSES------------------------ */
let p1 = document.querySelector(".jeremyBottom");
let p2 = document.querySelector(".jeremyBottom:nth-child(2)");
let p3 = document.querySelector(".jeremyBottom:nth-child(3)");

let isP1, isP2, isP3 = false;

 
p1.addEventListener("click", ()=>{
  if(p1.classList.contains("active")){} 
  else{
  isP1 = true;  
  p1.classList.toggle("active");
  fetch("data.json")
  .then((response) => response.json())
  .then((data) => {

    for(let i in data){
      document.querySelector(".h" + i).innerText = data[i].timeframes.daily.current + " hrs";  
      document.querySelector(".w" + i).innerText = "Last Week - " + data[i].timeframes.daily.previous + " hrs";  
    }
 
  });
  }

  if(p2.classList.contains("active")){
    p2.classList.remove("active");
  }

  if(p3.classList.contains("active")){
    p3.classList.remove("active");
  }

});

p2.addEventListener("click", ()=>{
  if(p2.classList.contains("active")){} 
  else{
    isP2 = true;   
  p2.classList.toggle("active");
  
  fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for(let i in data){
      document.querySelector(".h" + i).innerText = data[i].timeframes.weekly.current + " hrs";  
      document.querySelector(".w" + i).innerText = "Last Week - " + data[i].timeframes.weekly.previous + " hrs";  
    }
  });
  }

  if(p1.classList.contains("active")){
    p1.classList.remove("active");
  }

  if(p3.classList.contains("active")){
    p3.classList.remove("active");
  }
});
 
p3.addEventListener("click", ()=>{
  if(p3.classList.contains("active")){} 
  else{
    isP3 = true; 
  p3.classList.toggle("active");
  
  fetch("data.json")
  .then((response) => response.json())
  .then((data) => {

    for(let i in data){
      document.querySelector(".h" + i).innerText = data[i].timeframes.monthly.current + " hrs";  
      document.querySelector(".w" + i).innerText = "Last Week - " + data[i].timeframes.monthly.previous + " hrs";  
    }
  });
  }

  if(p1.classList.contains("active")){
    p1.classList.remove("active");
  }

  if(p2.classList.contains("active")){
    p2.classList.remove("active");
  }
});

function defa(){ // try using this funtion to make code simpler
  fetch("data.json")
  .then((response) => response.json())
  .then((data) => {

    for(let i in data){
      document.querySelector(".h" + i).innerText = data[i].timeframes.weekly.current + " hrs";  
      document.querySelector(".w" + i).innerText = "Last Week - " + data[i].timeframes.weekly.previous + " hrs";  
    }
  });
};

/* fetch("data.json")
  .then((response) => response.json())
  .then((data) => {

    for(let i in data){
      document.querySelector(".h" + i).innerText = data[i].timeframes.monthly.current + " hrs";  
      document.querySelector(".w" + i).innerText = "Last Week - " + data[i].timeframes.monthly.previous + " hrs";  
    }
  });

function reRend(data){
let rendO, rendO2;

for(let i in data){
if(isP1){
  rendO = data[i].timeframes.daily.current + " hrs";
  rendO2 = "Last Week - " + data[i].timeframes.daily.previous + " hrs";
  console.log(isP1);
  isP1 = false;
}
if(isP2){
  rendO = data[i].timeframes.weekly.current + " hrs";
  rendO2 = "Last Week - " + data[i].timeframes.weekly.previous + " hrs";
  isP2 = false;
}
if(isP3){
  rendO = data[i].timeframes.monthly.current + " hrs";
  rendO2 = "Last Week - " + data[i].timeframes.monthly.previous + " hrs";
  isP3 = false;
}

  document.querySelector(".h" + i).innerText = rendO;  
  document.querySelector(".w" + i).innerText = rendO2;
}
} */