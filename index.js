var canvas = document.getElementById('c1')
c1.style.border = "1px solid black"
var gl = c1.getContext('experimental-webgl')
var setDimensions = () =>{
    c1.width = window.innerWidth*9/10
    c1.height = window.innerHeight*9/10
    gl = c1.getContext('experimental-webgl')
}
setDimensions()
window.onresize = () => {
    setDimensions()
}
