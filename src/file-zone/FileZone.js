import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {

    constructor(props){
        super(props)
        this.handleSelection = this.handleSelection.bind(this)
        
    }

    changeValue(value){
        var range, sel = window.getSelection()
            if(sel.rangeCount && sel.getRangeAt){
                range = sel.getRangeAt(0)
            }
            
            if(range) {
                sel.removeAllRanges()
                sel.addRange(range)
                document.execCommand('insertText',false, value)
            }
    }


    handleSelection(type, value){

            var range, sel = window.getSelection()
            if(sel.rangeCount && sel.getRangeAt){
                range = sel.getRangeAt(0)
            }
            if(range) {   
                sel.removeAllRanges()
                sel.addRange(range)
                if(type==='insertText'){
                    value = sel.toString()
                    this.props.api.setStopRequest(true)
                    this.props.api.getSynonymous(value)
                } else {
                    document.execCommand(type,false, value)
                }
            }
    }


    shouldComponentUpdate(nextProps){

        const {
            bold, 
            italic, 
            underline, 
            color, 
            indent} = this.props.values

        if(bold !== nextProps.values.bold) {
            window.addEventListener('mouseup', this.handleSelection('bold', null))
        }

        if(italic !== nextProps.values.italic){
            window.addEventListener('mouseup', this.handleSelection('italic', null))
        }

        if(underline !== nextProps.values.underline){
            window.addEventListener('mouseup', this.handleSelection('underline', null))            
        }

        if(nextProps.values.synonymousValue === true && nextProps.values.stopRequest !== true){
            window.addEventListener('mouseup', this.handleSelection('insertText', null))            
            
        } 

        if(nextProps.values.change !== null){
            window.addEventListener('mouseup', this.changeValue(nextProps.values.change))   
            this.props.api.restart(true)           
        }
        
        return true
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
