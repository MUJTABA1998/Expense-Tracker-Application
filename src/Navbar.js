import React from 'react'
import './App.css';

// class Navbar extends React.Component{
//     render() {

//         return(
//             <div className="navbar">
//                 <div className="logo">{this.props.app_info.name}</div>
//             </div>
//         )
//     }
// }


function Navbar(props) {


    return(
        <div className="navbar">
            <div className="logo">{props.app_info.name}</div>
        </div>
    )
    
}



  export default Navbar;