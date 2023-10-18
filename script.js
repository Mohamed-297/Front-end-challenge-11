let themes=document.querySelector(".themes .ball-slider")
let ball=document.querySelector(".themes .ball-slider span")
let container=document.querySelector(".container")
let body=document.querySelector("body")
let headerContent=document.querySelector(".header-content")
let monitor=document.querySelector(".monitor")
let monitorText=document.querySelector(".monitor span")
let buttonsContainer=document.querySelector(".buttons")
let clearBtn=document.getElementById("clear")
let deleteBtn=document.getElementById("delete")
let equalBtn=document.getElementById("equal")
let buttons=document.querySelectorAll(".buttons button")
let themeValue=1;
let temp;
function themeChange(){
    ++themeValue;
    if(themeValue==1){

        ball.style.cssText="left:0px;position:relative;background-color:red;"
        themes.style.cssText="background-color:hsl(223, 31%, 20%);"
        body.style.cssText="background-color:hsl(222, 26%, 31%);"
        headerContent.style.cssText="color:white"
        monitor.style.cssText="background-color:hsl(224, 36%, 15%);color:white;"
        buttonsContainer.style.cssText="background-color:#232c43"
        themeOneBtnColor();
        }
    else if(themeValue==2){
        ball.style.cssText="left:25px;position:relative;background-color:hsl(25, 98%, 40%);"
        themes.style.cssText="background-color:hsl(45, 7%, 89%);"
        body.style.cssText="background-color:hsl(0, 0%, 93%);"
        headerContent.style.cssText="color:black"
        monitor.style.cssText="background-color:white;color:black;"
        buttonsContainer.style.cssText="background-color:hsl(45, 7%, 89%)"
        themeTwoBtnColor()
    }
    else if(themeValue==3){
        ball.style.cssText="left:50px;position:relative;background-color:hsl(176, 100%, 44%);"
        themes.style.cssText="background-color:hsl(268, 71%, 12%);"
        body.style.cssText="background-color:hsl(268, 75%, 9%);"
        headerContent.style.cssText="color:hsl(52, 100%, 62%)"
        monitor.style.cssText="background-color:hsl(268, 71%, 12%);color:hsl(52, 100%, 62%);"
        buttonsContainer.style.cssText="background-color:hsl(268, 71%, 12%)"
        themeThreeBtnColor()
    }
    temp=themeValue
    themeValue=( themeValue % 3 );
}

function light(btn){
    btn.style.cssText="opacity:0.8;"
    
    if(temp==1){
        themeOneBtnColor();
    }
    else if(temp==2){
        themeTwoBtnColor();
    }
    else if(temp==3){
        themeThreeBtnColor();
    }
}

function delight(button){
    button.style.cssText="opacity:1"
    if(temp==1){
        themeOneBtnColor();
    }
    else if(temp==2){
        themeTwoBtnColor();
    }
    else if(temp==3){
        themeThreeBtnColor();
    }
}
function themeOneBtnColor(){
    buttons.forEach(btn=>{

        btn.style.cssText="background-color:white;color:hsl(224, 36%, 15%);box-shadow: 0px 3.3px 0px 0px hsl(0, 0%, 70%)"
    }
    )
    clearBtn.style.cssText="background-color:hsl(225, 21%, 49%);box-shadow: 0px 3.3px 0px 0px hsl(224, 28%, 35%);"
    deleteBtn.style.cssText="background-color:hsl(225, 21%, 49%);box-shadow: 0px 3.3px 0px 0px hsl(224, 28%, 35%);"
    equalBtn.style.cssText="background-color:hsl(6, 63%, 50%);box-shadow: 0px 3.3px 0px 0px hsl(6, 70%, 34%)"
}
function themeTwoBtnColor(){
    clearBtn.style.cssText="background-color:hsl(185, 42%, 37%);box-shadow: 0px 3.3px 0px 0px hsl(185, 58%, 25%);"
    deleteBtn.style.cssText="background-color:hsl(185, 42%, 37%);box-shadow: 0px 3.3px 0px 0px hsl(185, 58%, 25%);"
equalBtn.style.cssText="background-color:hsl(25, 98%, 40%);box-shadow: 0px 3.3px 0px 0px  hsl(25, 99%, 27%);"   
}
function themeThreeBtnColor(){
    buttons.forEach(btn=>{

        btn.style.cssText="background-color:hsl(268, 47%, 21%);color:hsl(52, 100%, 62%);box-shadow: 0px 3.3px 0px 0px hsl(290, 70%, 36%)"
    }
    )
    clearBtn.style.cssText="background-color:hsl(281, 89%, 26%);box-shadow: 0px 3.3px 0px 0px hsl(285, 91%, 52%);"
    deleteBtn.style.cssText="background-color:hsl(281, 89%, 26%);box-shadow: 0px 3.3px 0px 0px hsl(285, 91%, 52%);"
    equalBtn.style.cssText="background-color:hsl(176, 100%, 44%);color:black;box-shadow: 0px 3.3px 0px 0px  hsl(177, 92%, 70%);"
}

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{

        if(btn.innerHTML=="DEL"){
            monitorText.innerHTML += "";

        }
        else if(btn.innerHTML=="="){
            monitorText.innerHTML += "";
        }
        else{
            monitorText.innerHTML+= btn.innerHTML
        }
    })
})

clearBtn.addEventListener("click",()=>{
    monitorText.innerHTML=""
})
deleteBtn.addEventListener("click",()=>{
    monitorText.innerHTML=monitorText.innerHTML.substring((monitorText.innerHTML.length)-1,"")
    
})

equalBtn.addEventListener("click",()=>{
let res =eval(monitorText.innerHTML)    
if(res!=null){
    monitorText.innerHTML=res
}
else{
    monitorText.innerHTML="0"
}
res=0  
})