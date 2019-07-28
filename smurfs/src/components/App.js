import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import './App.css';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

   componentDidMount() {
        this.props.getSmurfs();
    }

  render() {
    return (
      <div className= 'App'>
        <h1>Welcome To Smurf Village</h1>
        <AddSmurf />
          {this.props.smurfs.map( smurf => (
            <div className= 'smurfs-list'>
            <h3 key={smurf.id}>
              <div className='smurf'>
                <div className='smurf-name'>Smurf:</div> {smurf.name}
              </div>
              <div className='smurf'>
                <div className='smurf-age'>Age:</div>{smurf.age}
              </div>
              <div className='smurf'>
                <div className='smurf-height'>Height:</div> {smurf.height}
              </div>
            </h3>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, fetchingSmurfs }) => ({
  smurfs,
  fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)( App )
