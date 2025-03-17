//start square check code here.
let input = document.querySelector("#squareno");
let btn = document.querySelector(".btnSquare");
let result = document.querySelector(".result");

function square(){
    let number = input.valueAsNumber;
    if(isNaN(number)){
        result.innerHTML = `Please enter the number`
    }else{
    let square = number * number;
    result.innerHTML = `(${number})<sup>2</sup> = ${square}`
    }
    input.value = "";
}
btn.addEventListener("click",()=>{
    result.classList.remove("hide")
    square();
});






//Check cube cod here .
let input2 = document.querySelector("#cubeno");
let btn2 = document.querySelector(".cubebtn");
let result2 = document.querySelector(".show");

function cube(){
    let number = input2.valueAsNumber;
    if(isNaN(number)){
        result2.innerHTML = `Please enter the number`
    }else{
    let cube = number * number * number;
    result2.innerHTML = `(${number})<sup>3</sup> = ${cube}`
    }
    input2.value = "";
}
btn2.addEventListener("click",()=>{
    result2.classList.remove("hide")
    cube();
});





//Square printing code is here.
let inputSquare = document.querySelector("#start");
let inputSquare2 = document.querySelector("#end");
let btnSquare = document.querySelector(".check");
let ansSquare = document.querySelector(".res");
let clear = document.querySelector(".clear");
function printSquare(){
    ansSquare.innerHTML = "";
    let start = inputSquare.valueAsNumber;
    let end = inputSquare2.valueAsNumber;
    if(start>end){
        ansSquare.style.backgroundColor = "orange";
        ansSquare.innerHTML = "please enter the correct number"
    }else{
    for(let i = start;i <= end;i++){
        let ul = document.createElement("ul");
            let li = document.createElement("li");
            ansSquare.appendChild(ul);
            ul.append(li);
            li.innerHTML = `(${i})<sup>2</sup> = ${i*i}`;
    }
        
    }

};

btnSquare.addEventListener("click",()=>{
    printSquare();
    start.value = "";
    end.value = "";
});

clear.addEventListener("click",()=>{
    ansSquare.innerHTML = "";
});


//cubeprint code is write here
let inputCubeStart = document.querySelector("#startCube");
let inuptCubeend = document.querySelector("#endCube");
let checkCube = document.querySelector(".checkCube");
let del = document.querySelector(".cut");
let res = document.querySelector(".rescube");

function cubePrint(){
    res.innerHTML = "";
    let start = inputCubeStart.valueAsNumber;
    let end = inuptCubeend.valueAsNumber;
    if(start>end){
        res.style.backgroundColor = "orange";
        res.innerHTML = "please enter the correct number"
    }else{
    for(let i = start;i <= end;i++){
        let ul = document.createElement("ul");
            let li = document.createElement("li");
            res.appendChild(ul);
            ul.append(li);
            li.innerHTML = `(${i})<sup>3</sup> = ${i*i*i}`;
    }
        
    }


};
checkCube.addEventListener("click",()=>{
    cubePrint();
    inputCubeStart.value = "";
    inuptCubeend.value = "";
});
del.addEventListener("click",()=>{
    res.innerHTML = "";
})
