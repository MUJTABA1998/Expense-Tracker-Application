import React from 'react'
import './App.css';

class Navbar extends React.Component{
    render() {

        return(
            <div className="navbar">
                It's Navbar
            </div>
        )
    }
}

function Nav() {

    return(
      <div>
        <Navbar />
      </div>
    )
    
  }

  export default Nav