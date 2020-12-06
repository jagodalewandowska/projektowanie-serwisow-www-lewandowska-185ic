import React from 'react';
import PropTypes from "prop-types";

// komponent funkcyjny, gdzie parametr month jest przekazany od
// rodzica a następnie wyświetlany w props.month
function showMonth(props) {
    return(
        <div className="myMonth">
            <br></br>
            <h4>Miesiąc to <b>{props.month}</b></h4>
        </div>            
    )            
}

showMonth.propTypes = {
    month: PropTypes.string
}

export default showMonth;