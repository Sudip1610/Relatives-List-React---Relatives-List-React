import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    relatives = ["Sg","Sf","Sk","Sd"];
    render() {
        return(
           <>
    <ol key="relativeList">
        {
        this.relatives.map((el,index) =>{
            <li key={`relativeListItem${index+1}`}>
                {el}
            </li>
        })}      
    </ol>

	</>
        )
    }
}


export default App;
