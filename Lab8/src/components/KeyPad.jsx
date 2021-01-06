import React, {Component} from 'react';

class KeyPad extends Component {

    render() {
        return (
            // Przy każdym kliknięciu wywoływany będzie this.props.OnClick który przekazuje parametr
            <div className="button">
                {/* Pierwszy rząd*/}
                <button class="btn btn-outline-info" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button class="btn btn-outline-info" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button class="btn btn-outline-info" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button class="btn btn-outline-info" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
                
                {/* Drugi rząd*/}
                <button class="btn btn-outline-info" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button class="btn btn-outline-info" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button class="btn btn-outline-info" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button class="btn btn-outline-info" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                {/* Trzeci rząd*/}
                <button class="btn btn-outline-info" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button class="btn btn-outline-info" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button class="btn btn-outline-info" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button class="btn btn-outline-info" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                {/* Czwarty rząd*/}
                <button class="btn btn-outline-info" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button class="btn btn-outline-info" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button class="btn btn-outline-info" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button class="btn btn-outline-info" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                {/* Piąty rząd*/}
                <button class="btn btn-outline-info" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button class="btn btn-outline-info" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button class="btn btn-outline-info" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button class="btn btn-outline-info" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}

export default KeyPad;