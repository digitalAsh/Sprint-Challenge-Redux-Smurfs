import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import './AddSmurf.css';

class AddSmurf extends React.Component {
    
                
         state = {  
            name: '',
            age: '',
            height: ''
         }   
      

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    addNew = event => {
        //event.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({ name: '', age: '', height: ''})
        //setTimeout(() => {this.props.history.push('http://localhost:3000')}, 400)
    }
    
    render() {
        return(
            <div className='smurf-form'>
                <form onSubmit={this.addNew} className='smurf-inputs'>
                    <input 
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='NAME'
                    />
                    <input
                        type='text'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder='AGE'
                    />
                    <input 
                        type='text'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                        placeholder='HEIGHT'
                    />   
                    <button>ADD SMURF</button>    
                </form>
            </div>
        )
    }

}

const mapStateToProps = ({ smurfs, fetchingSmurfs }) => ({
    smurfs,
    fetchingSmurfs
  });
  
  export default connect(
    mapStateToProps,
    { addSmurf }
  )( AddSmurf )
