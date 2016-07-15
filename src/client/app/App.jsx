'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom';
import Nav              from './Nav.jsx';
import Footer           from './Footer.jsx';
import TaskForm         from './TaskForm.jsx';
import TaskList         from './TaskList.jsx';
import ajax             from '../helpers/ajaxAdapter.js';
import util             from '../helpers/util.js';


// create a React Component called _App_
export default class App extends React.Component{

    // every class gets a constructor.
    // this is where we init the state.
    constructor() {

        // we also need to wake up our ancestors
        super();

        // here's our state
        this.state = {
          tasks : {}
        }
    }
    // this is right after the component is mounted on the screen
    componentDidMount(){
        // go to the db and refresh the task
        ajax.getTasks().then( data=> // update state*/
        // when the component comes back, update/set the state
         this.setState({tasks: data.indexByKey('task_id')
        })
      )
     }

    // note that classes do **not** have commas between their methods
    addTask( newTask ){
        console.log( newTask )
        ajax.createTask(newTask).then( data =>{
            this.state.tasks[ data.task_id ]=data
            this.setState({tasks: this.state.tasks})
        })
    }

    // TOGGLE TASK (WE ONLY NEED THE KEY HERE)

    toggleTask( key ){
       let myTask = this.state.tasks[key];
       //send out this new change to the DB (ajax)
       myTask.completed = !myTask.completed;
       //bring in AJAX data here!
       ajax.updateTask( myTask )
        .then( data=>{
           this.state.tasks[ data.task_id] = data
           this.setState({tasks: this.state.tasks})
        })
    }

    // 90% of your components will render()
    // REMEMBER you can only return **one** root element from a render fn.
    render(){
        return(
            <container>
                <Nav />
                <header>
                </header>
                <div className="container">
                    <TaskForm addTask={this.addTask.bind(this)}/>

                        <div className="row">
                        {/*OPEN ITEMS*/}
                        <article className="col-md-6">
                            <h3>Open Items</h3>
                            <TaskList
                            list={this.state.tasks}
                            f={x=>!x}
                            action={this.toggleTask.bind(this)} />
                        </article>

                        {/*COMPLETED ITEMS*/}
                        <article className="col-md-6">
                            <h3>Completed Items</h3>
                            <TaskList
                            list={this.state.tasks}
                            f={x=>x}
                            action={this.toggleTask.bind(this)} />
                        </article>

                    </div>
                </div>
                <Footer />
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render( <App/>, document.querySelector('#container') )
