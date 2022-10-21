import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} alt="img" style={{height: '200px', width:'auto'}} />
                <h2 className="card__title"> {props.title} </h2>
                <p className="card__desc">{props.description}</p>
                <p className="card__price">{props.price}</p>
            </div>
            {/* event handling */}
            <button onClick= {Apply} className="card__button" style={{marginBottom:'30px', color:"#370752"}}>Apply</button>
        </div>
    );
}

function Apply() {
        return (
            alert("you have applied to this course!")
        );
}

export default Card;