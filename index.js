
const estado = {
    x:0,
    y:0,
    active:false
}
function criaDiv(x, y, size, background, borderR, zi) {
    const div = document.createElement('div');
    div.style.position = "absolute";
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.marginLeft = x + "px";
    div.style.marginTop = y + "px";
    div.style.borderRadius= `${borderR}%`;
    div.style.zIndex=zi;
    div.style.background = background;
    return div;
}

function displayBoxes(numBoxes, minSize, maxSize, borderR, zi, vel) {
    let cont = 0;
    let tempX = estado.x;
    let tempY = estado.y;
    let myTimer = setInterval(function () {
       
            if (cont>numBoxes && numBoxes!=0) {
                clearInterval(myTimer);
            }
        
        cont++;
        let size = Math.round(Math.random() * (maxSize - minSize) + minSize);

        const x = Math.round(Math.random() * ((tempX+50) - (tempX-50))+(tempX-50));
        const y = Math.round(Math.random() * ((tempY+50) - (tempY-50))+(tempY-50));
        const r = Math.round(Math.random() * (255 - 50)+50);
        const g = Math.round(Math.random() * (255 - 50)+50);
        const b = Math.round(Math.random() * (255 - 50)+50);
        const myDiv = criaDiv(x, y, size, `rgb(${r},${g},${b})`, borderR, zi);
        document.querySelector(".canvas").appendChild(myDiv);
        let contFall = 0
      
        setTimeout(() => myDiv.remove(), vel);
    }, vel);


}
 function dp(){
     displayBoxes(10, 7, 14, 50, 2, 150); 
     displayBoxes(10, 10, 30, 0, 3, 100); 
     displayBoxes(10, 5, 20, 20, 1, 100); 
};


function enventHandler(vel){
    if(!estado.active){
        estado.active=true;
        setTimeout(()=>{
            dp();
            estado.active=false;
        },vel)
    }
}

document.querySelector(".canvas").addEventListener('mousemove', (e)=>{
      
        var posX = e.clientX;
        var posY = e.clientY;
        estado.x= posX;
        estado.y=posY;
        enventHandler(100);
})

document.querySelector(".canvas").addEventListener('click', (e)=>{
        enventHandler(0);
})

