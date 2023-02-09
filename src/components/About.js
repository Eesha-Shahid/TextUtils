// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText,setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if (myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }

    return (
        <div className='container'>
            <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong> 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatibus corrupti porro in voluptas, vel rerum facere sunt iste eveniet.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum facilis. Voluptate optio dolorem dignissimos sapiente perspiciatis consectetur quidem impedit. Sapiente consectetur nemo laborum non explicabo. Laborum fuga praesentium expedita.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, saepe dolorem placeat eos maxime quaerat.
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="my-3">
                <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div> */}
        </div>
    )
}
