import React from 'react';
import classnames from 'classnames';

const Editable = ({editing, value, onEdit, className, ...props}) => {
    if(editing){
        return <Editable.Edit value={value} onEdit={onEdit} className={className}/>;
    }

    return <Editable.Value value={value} className={className} />;
}

class Edit extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {className, value, onEdit, ...props} = this.props;
        return <input 
            type="text"
            className={classnames('edit', className)}
            autoFocus={true}
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
// ☞ 8bbc4667-cf88-4a91-a57a-7e9c84bf3a7b

Editable.Value = ({value, className, ...props}) => (<span className={classnames('value', className)} {... props}>{value}</span>);
Editable.Edit = Edit;


export default Editable;