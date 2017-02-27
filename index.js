var canvas = document.getElementById('c1')
c1.style.border = "1px solid black"
var gl = c1.getContext('experimental-webgl')
var setDimensions = () =>{
    c1.width = window.innerWidth
    c1.height = window.innerHeight
    gl = c1.getContext('experimental-webgl')
}
setDimensions()
window.onresize = () => {
    setDimensions()
}
