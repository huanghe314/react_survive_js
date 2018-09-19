import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        }
    }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        });
    };

    deleteNote = (id, e) => {
        e.stopPropagation();
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    };

    editNote = (id, task) => {
        this.setState({
            notes: this.state.notes.map(
                note => {
                    if(note.id === id){
                        note.editing = false;
                        note.task = task;
                    }
                    return note;
                }
            )
        });
    }

    activateNoteEdit = (id) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id){
                    note.editing = true;
                }
                return note;
            })
        });
    }

    render(){
        const notes = this.state.notes;
        return(
            <div>
                <button onClick={this.addNote}>
                    +
                </button>
                <Notes 
                    notes={notes} 
                    onDelete={this.deleteNote}
                    onEdit={this.editNote}
                    onNoteClick={this.activateNoteEdit}
                />
            </div>
        )
    }
}

export default App;