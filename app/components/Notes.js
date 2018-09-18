import React from 'react';
import Note from './Note';

class Notes extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {notes, onDelete=() => {}} = this.props;
        return(
            <ul>{
                notes.map(({id, task}) =>
                    <li key={id}><Note task={task} onDelete={onDelete.bind(null, id)} /></li>
                )
            }</ul>
        )

    }
}

export default Notes;