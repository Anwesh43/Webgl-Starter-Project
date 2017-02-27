class ShaderProgramHandler {
    createAndCompileVertexShader(gl) {
        var vert_code = "attribute vec2 coordinates;\nvoid main(void){\n   gl_Position = vec4(coordinates,0.0,1.0);\n}";
        console.log(vert_code)
        this.vertexShader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(this.vertexShader,vert_code);
        gl.compileShader(this.vertexShader)
        console.log("created and compiled vertex shader")
    }
    createAndCompileFragmentShader(gl) {
        var frag_code = "void main(void) {\n  gl_FragColor=vec4(0.0,0.8,0.0,0.1);\n}"
        this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(this.fragmentShader,frag_code)
        gl.compileShader(this.fragmentShader)
        console.log("created and compiled vertex shader")
    }
    createAndlinkShaderPrograms(gl) {
        this.createAndCompileVertexShader(gl)
        this.createAndCompileFragmentShader(gl)
        this.program  = gl.createProgram()
        gl.attachShader(this.program,this.vertexShader)
        gl.attachShader(this.program,this.fragmentShader)
        gl.linkProgram(this.program)
        gl.useProgram(this.program)
        console.log("created and linked shader programs")
    }
}
