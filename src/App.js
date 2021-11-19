import React from 'react';
import Navbar from './components/navbar';
import Layout from './components/components'
import './App.css';
import syncLocalStorage from './hooks/localStorage';

class App extends React.Component {

  state = {
    tasks: []
  }

  handleSubmit = value => {
    if (value.split(' ')[0] === '') return

    if (value !== '') {

      const tasks = {
        id: this.state.tasks.length,
        Name: value,
        check: false
      }

      this.setState({ tasks: this.state.tasks.concat(tasks) })

      syncLocalStorage([...this.state.tasks], 'set')

    } else {
      console.log('No Task Assigned')
    }
  }

  handleReset = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => item.Name === '')
    })

    this.toLocalStorage([])
  }

  handleTick = object => {
    const index = object.id
    let tasks = [...this.state.tasks]
    let item = { ...tasks[index] }
    item.check = true
    tasks[index] = item
    this.setState({ tasks })
  }

  handleReTick = object => {
    const index = object.id
    let tasks = [...this.state.tasks]
    let item = { ...tasks[index] }
    item.check = false
    tasks[index] = item
    this.setState({ tasks })
  }

  handleDelete = object => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== object.id)
    })
  }

  render() {
    // syncLocalStorage(this.state.tasks[this.state.tasks.length - 1], 'set')
    // console.log(this.state.tasks[this.state.tasks.length - 1])
    return (
      <React.Fragment>
        <div className='container'>
          <Navbar noTasks={this.state.tasks} />
          <Layout
            allTasks={this.state.tasks}
            onSubmit={this.handleSubmit}
            onReset={this.handleReset}
            onTick={this.handleTick}
            onReTick={this.handleReTick}
            onDelete={this.handleDelete}
          ></Layout>
        </div>
      </React.Fragment>
    )
  }

  toLocalStorage = value => {
    localStorage.setItem('taskArray', value)
  }
}

export default App;