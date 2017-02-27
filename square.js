var canvas = document.getElementById('c1')
canvas.style.border = '1px solid black'
var vertexHandler = new VertexHandler([-0.5,0.5,
                                    -0.5,-0.5,
                                    0.5,-0.5,
                                    0.5,0.5],[0,1,3,3,1,2])
var shaderProgramHandler = new ShaderProgramHandler()
var render = () => {
    canvas.width = Math.min(window.innerHeight,window.innerWidth)
    canvas.height = canvas.width
    var gl = canvas.getContext('experimental-webgl')
    vertexHandler.bindBuffersVertex(gl,gl.STATIC_DRAW)
    vertexHandler.bindBuffersIndex(gl,gl.STATIC_DRAW)
    shaderProgramHandler.createAndlinkShaderPrograms(gl,'2d')
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexHandler.vertexBuffer)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,vertexHandler.indexBuffer)
    var coordinateVal = gl.getAttribLocation(shaderProgramHandler.program,"coordinates")
    gl.vertexAttribPointer(coordinateVal,2,gl.FLOAT,false,0,0)
    gl.enableVertexAttribArray(coordinateVal)
    gl.clearColor(0,0,0,1)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)
    gl.viewport(0,0,canvas.width,canvas.height)
    gl.drawElements(gl.TRIANGLES,vertexHandler.indexData.length,gl.UNSIGNED_SHORT,0)
}
window.onresize = () => {
  render()
}
render()
