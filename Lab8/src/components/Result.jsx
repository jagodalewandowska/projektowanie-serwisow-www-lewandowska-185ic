import React, {Component} from 'react';

class Result extends Component {
    render() {
        // Przypisanie wyniku otrzymanego w KeyPad
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
        );
    }
}
export default Result;