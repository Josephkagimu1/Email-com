import React from 'react';
import { Header, Button, Tab } from 'carbon-components-react';

const file = () => {

    function sub() {
        console.log("clicked");
      }

    return (
        <div>
         <Header> 
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Visit</a></li>
          </ul>
         </Header>
        <Tab label="come"></Tab>

        <Button onClick={sub}> sub </Button>
        </div>
    )
}

export default file;
