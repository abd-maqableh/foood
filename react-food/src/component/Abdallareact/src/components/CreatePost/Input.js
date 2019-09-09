import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class OutlinedTextFields extends Component {
  
render (){
    const {lable}= this.props
    return (
        <form >
          
          <TextField
            id="outlined-with-placeholder"
            label={lable}
            // placeholder="Placeholder"
            margin="normal"
            variant="outlined"
          />
          
        </form>
      );
}

}
