import React, { Component } from "react";
import Dropzone from "react-dropzone";

class ImgDropAndCrop extends Component{
    render (){

       
        return (
            <div>
                <h1>Drop and crop</h1>

                <Dropzone onDrop={this.handleDrop}>heeeh</Dropzone>
            </div>
       )
    }
}

export default ImgDropAndCrop