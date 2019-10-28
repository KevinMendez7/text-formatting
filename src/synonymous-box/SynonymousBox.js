import React from 'react'
import './SynonymousBox.css'

const SynonymousBox = props => (
    <div className='SynonymousBox'>
        <select onChange={props.handleSelect}>
            {props.synonymous.map((s, index) => (<option key={index} value={s.word}>{s.word}</option>))}
        </select>
    </div>
)

export default SynonymousBox