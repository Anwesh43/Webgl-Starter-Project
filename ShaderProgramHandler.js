var frag_code = "void main(void) {\n  gl_FragColor=vec4(0.9,0.8,0.2,1);\n}"
var vert2d_code = "attribute vec2 coordinates;\nvoid main(void){\n   gl_Position = vec4(coordinates,0.0,1.0);\n}";
var vert3d_code = "attribute vec3 coordinates;\nvoid main(void){\n   gl_Position = vec4(coordinates,1.0);\n}";
class ShaderProgramHandler {
    createAndCompileVertexShader(gl,mode) {
        var vert_code = "attribute vec2 coordinates;\nvoid main(void){\n   gl_Position = vec4(coordinates,0.0,1.0);\n}";
        console.log(vert2d_code)
        this.vertexShader = gl.createShader(gl.VERTEX_SHADER)
        if(mode == "2d") {
            gl.shaderSource(this.vertexShader,vert2d_code)
        }
        else if(mode == "3d") {
          gl.shaderSource(this.vertexShader,vert3d_code)
        }
        gl.compileShader(this.vertexShader)
        console.log("created and compiled vertex shader")
    }
    createAndCompileFragmentShader(gl) {

        this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(this.fragmentShader,frag_code)
        gl.compileShader(this.fragmentShader)
        console.log("created and compiled vertex shader")
    }
    createAndlinkShaderPrograms(gl,mode) {
        this.createAndCompileVertexShader(gl,mode)
        this.createAndCompileFragmentShader(gl)
        this.program  = gl.createProgram()
        gl.attachShader(this.program,this.vertexShader)
        gl.attachShader(this.program,this.fragmentShader)
        gl.linkProgram(this.program)
        gl.useProgram(this.program)
        console.log("created and linked shader programs")
    }
}
