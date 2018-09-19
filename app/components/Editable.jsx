import React from 'react';

const Editable = ({editing, value, onEdit, ...props}) => {
    if(editing){
        return <Editable.Edit value={value} onEdit={onEdit} />;
    }

    // return <span {...props}>{value}</span>
    return <Editable.Value value={value} />;
}

class Edit extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {value, onEdit, ...props} = this.props;
        return <input 
            type="text"
            autoFoucs={true}
            defaultValue={value}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
            {... props}
        />;
    }
    checkEnter = (e) => {
        if(e.key === 'Enter'){
            this.finishEdit(e)
        }
    }
    finishEdit = (e) => {
        const value = e.target.value;
        
        if(this.props.onEdit){
            this.props.onEdit(value);
        }
    }
}

Editable.Value = ({value, ...props}) => (<span {... props}>{value}</span>);
Editable.Edit = Edit;


export default Editable;