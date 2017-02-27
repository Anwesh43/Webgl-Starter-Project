class VertexHandler {
    constructor(vertexData,indexData) {
        this.vertexData = vertexData
        this.indexData = indexData
    }
    bindBuffers(gl,bufferType) {
        this.vertexBuffer = gl.createBuffer()
        console.log(this.vertexData)
        gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer)
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),bufferType)
        gl.bindBuffer(gl.ARRAY_BUFFER,null)
        console.log("binded vertex data to buffer")
    }
}
