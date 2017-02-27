var canvas = document.getElementById('c1')
c1.style.border = "1px solid black"
var gl = c1.getContext('experimental-webgl')
var vertexHandler = new VertexHandler([0.5,0.5,0.5,-0.5,-0.5,0.5])
var shaderProgram = new ShaderProgramHandler()
var pointAttribToVertexObject = () => {
    var coordinateVal = gl.getAttribLocation(shaderProgram.program,"coordinates")
    gl.vertexAttribPointer(coordinateVal,2,gl.FLOAT,false,0,0)
    gl.enableVertexAttribArray(coordinateVal)
    console.log("pointed attribute to VBO")
}
var startRendering = () =>{
    c1.width = window.innerWidth*9/10
    c1.height = window.innerHeight*9/10
    gl = c1.getContext('experimental-webgl')
    vertexHandler.bindBuffers(gl,gl.STATIC_DRAW)
    shaderProgram.createAndlinkShaderPrograms(gl)
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexHandler.vertexBuffer)
    pointAttribToVertexObject()
}
startRendering()
window.onresize = () => {
    startRendering()
}
