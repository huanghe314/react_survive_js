import React from 'react';
import Note from './Note';
import Editable from './Editable';

class Notes extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {notes, 
            onDelete=() => {}, onNoteClick=() => {}, onEdit=() => {}} = this.props;
        return(
            <ul>{notes.map(({id, task, editing}) =>
                    <li key={id}>
                        <Note onClick={onNoteClick.bind(null, id)}>
                            <Editable
                                editing={editing}
                                value={task}
                                onEdit={onEdit.bind(null, id)} />
                            <button onClick={onDelete.bind(null, id)}>x</button>
                        </Note>
                    </li>
                )
            }</ul>
        )
    }
}

// TODO: 修改notes里的render方式
// class SubNote extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         const {id, task, editing} = this.props;
//     }
// }

export default Notes;