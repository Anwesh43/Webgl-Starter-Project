var canvas = document.getElementById('c1')
c1.style.border = "1px solid black"
var gl = c1.getContext('experimental-webgl')
var vertexHandler = new VertexHandler([0.5,0.5,0.5,-0.5,-0.5,0.5])
var shaderProgram = new ShaderProgramHandler()
var startRendering = () =>{
    c1.width = window.innerWidth*9/10
    c1.height = window.innerHeight*9/10
    gl = c1.getContext('experimental-webgl')
    vertexHandler.bindBuffers(gl,gl.STATIC_DRAW)
    shaderProgram.createAndlinkShaderPrograms(gl)
}
startRendering()
window.onresize = () => {
    startRendering()
}
