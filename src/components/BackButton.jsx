import React from "react";
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


const BackButton = (props) => {
    return(
        <div className="icon">
        <Link to={props.back}><FontAwesomeIcon icon={faArrowLeftLong} size="2xl" /></Link>
        </div>);
}

export default BackButton;