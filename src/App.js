import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as textFormattingAction from './_action/textFormatting.action'
import * as textFormattingSelector from './_selector/textFormatting.selector'
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
    getText() {
        getMockText().then(function (result) {
            console.log(result);
        });
    }
    render() {
        
        const { values, textFormattingAction } = this.props
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel values={values} options={textFormattingAction} />
                    <FileZone values={values} />
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
      values : {
        bold : textFormattingSelector.getBold(state),
        italic : textFormattingSelector.getItalic(state),
        underline : textFormattingSelector.getUnderline(state),
        indent : textFormattingSelector.getIndent(state),
        color : textFormattingSelector.getColor(state)
      }
    }
  }
  
  function mapDispatchToProps(dispatch, props) {
    return {
      textFormattingAction : bindActionCreators(textFormattingAction, dispatch),      
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(App)
