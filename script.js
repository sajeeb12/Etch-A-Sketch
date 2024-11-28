const mainDiv = document.querySelector("#div-container")
const mainDivInfo = mainDiv.getBoundingClientRect();
console.log(mainDivInfo);
mainDivWidth = mainDivInfo.width;
mainDivHeight = mainDivInfo.height;
console.log(`width: ${mainDivWidth}, height: ${mainDivHeight}`)

function inputSize(){
    const numOfDiv = (Number)(prompt("Enter how many divs in a dimension: "));
    if(numOfDiv !==null && numOfDiv>0 && numOfDiv <101){
        console.log("x",numOfDiv);
        return numOfDiv;
    }
    else{
        return -1;
    }
}

document.querySelector("#btn").addEventListener("click", () => {
        const num = checkInputValue();
        mainDiv.replaceChildren();
        createSquareDiv(num);
        
});






function createSquareDiv(num){
    childDivWidth = (mainDivWidth / num);
    childDivHeight = (mainDivHeight / num);
    mainDiv.style.boxSizing = "content-box";
    for(let i = 0; i<num; i++){
        for(let j = 0; j<num; j++){
            const childDiv = document.createElement('div');
            childDiv.style.width = `${childDivWidth}px`;
            childDiv.style.height = `${childDivHeight}px`;
            childDiv.style.border = '1px solid black';
            childDiv.style.boxSizing = "border-box";
            childDiv.style.flexBasis = "1";
            mainDiv.appendChild(childDiv);

        }
        mainDiv.style.flexWrap = "wrap";
        
    }
}



function checkInputValue(){
    const number = inputSize();
    if(number === -1){
        alert("Please provide valid number. Valid number is between 1 to 100")
    }
    else{
        return number;
    }
}



