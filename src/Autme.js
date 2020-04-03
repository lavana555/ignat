import React from 'react';



class Autme extends React.Component {
    render() {

        return (

            <div >
                name:
                <div>{this.props.name}</div>
             <div style={{color: "green"}}>
                 successfully</div>
            </div>

        );
    }

}

export default Autme;
