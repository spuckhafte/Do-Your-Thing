import React from 'react';
class Navbar extends React.Component {
    render() { 
        return(
            <nav style={{userSelect:'none'}} className="navbar navbar-primary bg-primary">
                <div className="container-fluid">
                    <span style={{fontWeight:'bold'}} className="navbar-brand mb-0 h1">
                        Do Your Thing
                        <span 
                            style={{fontSize: 'x-small', position:'relative', bottom:'8px'}} 
                            className="badge round-pill bg-danger m-1">
                            { this.props.noTasks === 0 
                                ? '' 
                                : this.props.noTasks.filter(task => task.check === false).length === 0 
                                ? ''
                                : this.props.noTasks.filter(task => task.check === false).length }
                        </span>
                    </span>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;