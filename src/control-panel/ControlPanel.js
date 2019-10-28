import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {

    constructor(props){
        super(props)
    }

    handleBoldFormat(e, fn, value){
        e.preventDefault()
        fn.setBold(!value)
    }

    handleItalicFormat(e, fn, value){
        e.preventDefault()
        fn.setItalic(!value)
    }

    handleUnderlineFormat(e, fn, value){
        e.preventDefault()
        fn.setUnderline(!value)
    }

    handleSynonymous(e, fn, value){
        e.preventDefault()
    }

    render() {
        const { options, values } = this.props
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button 
                        onClick={ (e) => this.handleBoldFormat(e, options, values.bold)} 
                        className="format-action" 
                        type="button"><b>B</b></button>
                    <button
                        onClick={ (e) => this.handleItalicFormat(e, options, values.italic)}  
                        className="format-action" type="button"><i>I</i></button>
                    <button
                        onClick={ (e) => this.handleUnderlineFormat(e, options, values.underline)} 
                        className="format-action" type="button"><u>U</u></button>
                        <button
                        onClick={ (e) => this.handleSynonymous(e, options, values.underline)} 
                        className="format-action" type="button"><u>S</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
