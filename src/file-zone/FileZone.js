import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {

    constructor(props){
        super(props)

        this.handleSelection = this.handleSelection.bind(this)
        
    }


    handleSelection(type, value){
        
            // console.log(window.getSelection().toString())
            // console.log(window.getSelection().getRangeAt(0))

            // console.log(window.getSelection())

            var range, sel = window.getSelection()
            if(sel.rangeCount && sel.getRangeAt){
                range = sel.getRangeAt(0)
            }
            // console.log(range)
            if(range) {
                // console.log('estoy aqui')
                sel.removeAllRanges()
                sel.addRange(range)
                
                document.execCommand(type,false, value)
            
            }

        
    }


    shouldComponentUpdate(nextProps){

        // console.log(this.props)
        const {bold, italic, underline, color, indent} = this.props.values
        console.log(bold, italic, underline)
        if(bold !== nextProps.values.bold) {
            window.addEventListener('mouseup', this.handleSelection('bold', null))
            // window.removeEventListener('mouseup', this.handleSelection('insertText', 'hola'))
            // return true
        }

        if(italic !== nextProps.values.italic){
            window.addEventListener('mouseup', this.handleSelection('italic', null))
            // window.removeEventListener('mouseup', this.handleSelection('italic', null))
            // return true
        }

        if(underline !== nextProps.values.underline){
            window.addEventListener('mouseup', this.handleSelection('underline', null))
            // window.removeEventListener('mouseup', this.handleSelection('underline', null))
            // return true
        }

        
        
        return true
    }
    componentDidMount(){
        
    } 

    handleSelect(e){
        e.preventDefault()
        console.log(e)
    }

    render() {
        return (
            <div id="file-zone">
                <div contentEditable={true} id="file">

                </div>
            </div>
        );
    }
}

export default FileZone;
