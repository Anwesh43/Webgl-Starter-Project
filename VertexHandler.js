class VertexHandler {
    constructor(vertexData,indexData) {
        this.vertexData = vertexData
        this.indexData = indexData
    }
    bindBuffersVertex(gl,bufferType) {
        this.vertexBuffer = gl.createBuffer()
        console.log(this.vertexData)
        gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer)
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),bufferType)
        gl.bindBuffer(gl.ARRAY_BUFFER,null)
        console.log("binded vertex data to buffer")
    }
    bindBuffersIndex(gl,bufferType) {
        this.indexBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.indexData),bufferType)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null)
        console.log("binded index data to buffer")
    }
}
