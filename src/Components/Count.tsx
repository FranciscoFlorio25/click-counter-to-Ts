import React from "react";
import '../StyleSheet/Count.css';

interface CountProps {
    clicksCounter: number
}


const Count: React.FC<CountProps> = (props) =>  {
    return (
            <div className= 'counter'>
                {props.clicksCounter}
            </div>
    );
}

export default Count;