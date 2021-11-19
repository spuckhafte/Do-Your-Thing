import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faRecycle } from '@fortawesome/free-solid-svg-icons'

class Layout extends React.Component {

    clicked = value => {
        // const create = new Audio('../Assets/create.wav')
        const elem = document.getElementById('taskName')
        this.props.onSubmit(value)
        // create.play()
        elem.value = ''
        elem.focus()
    }

    reset = element => {
        // const reset =  new Audio('../Assets/reset.wav')
        // reset.play()
        element.focus()
        this.props.onReset()
    }

    tick = (object, element) => {
        // const tick = new Audio('../Assets/tick.wav')
        // tick.play()
        element.focus()
        if (object.check === false) {this.props.onTick(object)}
        if (object.check === true) {this.props.onReTick(object)}
    }

    delete = (object, element) => {
        // const del = new Audio('../Assets/delete.wav')
        // del.play()
        element.focus()
        this.props.onDelete(object)
    }

    taskStyles = {
        fontVariant: 'small-caps',
        fontWeight: 'bold',
        fontSize: 'large'
    }

    taskCompletedStyles = {
        textDecoration: 'line-through',
        fontWeight: 'lighter',
        color: 'gray'
    }

    render() { 
        return(
            <React.Fragment>
                <div className="form-group d-flex align-items-center h-50 w-60 my-3">
                    <input type="text" style={{boxShadow:'none'}} className="form-control mx-1" id="taskName" placeholder="Task" autoComplete='off' autoFocus maxLength='70'/>

                    <button type='button' style={{boxShadow:'none'}} className="btn btn-outline-success mx-1" 
                    onClick={
                        () => this.clicked(document.getElementById('taskName').value)
                    }>Create</button>

                    <button type='button' style={{boxShadow:'none'}} onClick={ 
                        () => this.reset(document.getElementById('taskName'))
                     } className="btn btn-warning mx-1">Reset</button>
                </div>

                <table className='table table-borderless table-dark table-hover'>
                <tbody>
                    {this.props.allTasks.map(t => {
                        return<tr>
                            <th scope="row"></th>
                            <th scope="row"><ol>  </ol></th>
                            <td key={t.id} style={this.taskStyles} className='mx-5'>
                                { t.check === false ? t.Name : <span style={this.taskCompletedStyles}>{t.Name}</span>}
                                </td>
                            <td><button style={{boxShadow:'none'}}
                                onClick={
                                    () => this.tick(t, document.getElementById('taskName'))
                                } 
                                className={t.check === false?"btn btn-outline-success btn-sm":"btn btn-info btn-sm"}><FontAwesomeIcon icon={t.check === false?faCheck:faRecycle}
                             /></button></td>
                            <td><button style={{boxShadow:'none'}} 
                                    onClick={
                                        () => this.delete(t, document.getElementById('taskName'))
                                    } 
                                    className="btn bg-danger btn-sm">
                                    <FontAwesomeIcon icon={faTrash}/></button></td>
                            <th scope="row"><ol></ol></th>
                        </tr>
                    })}
                </tbody>
                </table>
            </React.Fragment>
        )
    }
}
 
export default Layout;