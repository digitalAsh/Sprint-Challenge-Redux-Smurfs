import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

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
        event.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({ name: '', age: '', height:''})
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.addNew}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='name'
                    />
                    <input
                        type='text'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder='age'
                    />
                    <input
                        type='text'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                        placeholder='height'
                    />   
                    <button>Add Smurf</button>    
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
