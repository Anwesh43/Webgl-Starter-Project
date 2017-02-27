var canvas = document.getElementById('c1')
c1.style.border = "1px solid black"
var gl = c1.getContext('experimental-webgl')
var vertexHandler = new VertexHandler([0.5,0.5,0.5,-0.5,-0.5,0.5])
var shaderProgram = new ShaderProgramHandler()
var pointAttribToVertexObject = () => {
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexHandler.vertexBuffer)
    var coordinateVal = gl.getAttribLocation(shaderProgram.program,"coordinates")
    gl.vertexAttribPointer(coordinateVal,2,gl.FLOAT,false,0,0)
    gl.enableVertexAttribArray(coordinateVal)
    console.log("pointed attribute to VBO")
}
var startRendering = () =>{
    c1.width = window.innerWidth*9/10
    c1.height = window.innerHeight*9/10
    gl = c1.getContext('experimental-webgl')
    vertexHandler.bindBuffersVertex(gl,gl.STATIC_DRAW)
    shaderProgram.createAndlinkShaderPrograms(gl,"2d")
    console.log(vertexHandler.vertexBuffer)
    pointAttribToVertexObject()
    gl.clearColor(0,1.0,0,1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)
    gl.viewport(0,0,canvas.width,canvas.height)
    gl.drawArrays(gl.TRIANGLES,0,3)
}
startRendering()
window.onresize = () => {
    startRendering()
}
