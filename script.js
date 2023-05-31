console.log("script running .....")
document.querySelector('.cross').style.display=document
document.querySelector('.hamburger').addEventListener("click" , ()=>{
    document.querySelector('.sidebargo').classList.toggle('sidebargo');
    if(document.querySelector('.sidebargo').classList.toggle('sidebargo')){
       document.querySelector('.threebar').style.display='inline'
       document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.threebar').style.display='none'
       document.querySelector('.cross').style.display='inline'
    }

})

document.querySelector('.cross').addEventListener("click" , ()=>{
    document.querySelector('.sidebargo').classList.toggle('sidebargo');
    if(document.querySelector('.sidebargo').classList.toggle('sidebargo')){
       document.querySelector('.threebar').style.display='none'
       document.querySelector('.cross').style.display='inline'
    }
    else{
        document.querySelector('.threebar').style.display='inline'
       document.querySelector('.cross').style.display='none'
    }

})