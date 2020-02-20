import React from 'react';
import './App.css';
import './media.css';
import { Checkbox, FormControlLabel} from '@material-ui/core/';


    
export default function ToDoList() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
      });
    
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

    return (
        <div>
            <FormControlLabel
            control={
                <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
            }
            label="first to do!"
            />
            <FormControlLabel
            control={
                <Checkbox checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" />
            }
            label="second to do!"
            />
        </div>
        
    );
    
}
    



