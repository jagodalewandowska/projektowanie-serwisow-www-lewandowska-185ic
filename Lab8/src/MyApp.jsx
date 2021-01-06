import React, { Component } from 'react';
import Result from './components/Result';
import KeyPad from "./components/KeyPad";
import './MyApp.css';
import Header from "./Header"

class MyApp extends Component {
    // Konstruktor przekazujący wynik
    constructor(){
        super();
        this.state = {
            result: ""
        }
    }
    onClick = button => {
        // funkcja Calculate - która działa wtedy, kiedy zostanie wciśnięty przycisk =
        if(button === "="){
            this.calculate()
        }
        // funkcja backspace usuwająca poprzedni wpisany element - CE na kalkulatorze
        else if(button === "CE"){
            this.backspace()
        }
        // czyszczenie przy wciśnięciu przycisku C
        else if(button === "C"){
            this.reset()
        }
        else {
        // ustawianie stanu jako wynik plus wartość wciśniętego guzika
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        // Jeśli wpisana wartość ma podwójny minus zamienia go na plus w wyniku
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }
        // ustawienie result bez zmian
        else {
            checkResult = this.state.result
        }

        // wpisywanie w pole, jeśli wpis jest niepoprawny - nawiasy w złym miejscu etc.
        // wyskoczy napis "Niepoprawny wpis"
        try {
            this.setState({                
                //aby nie wyświetlał się komunikat w konsoli
                // eval can be harmful  no-eval
                // eval służy do wyświetlania wyników, gdzie checkresult to wartość 
                // zdefiniowana powyżej
                // eslint-disable-next-line 
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            // kiedy wyłapany jest błąd zapisu
            this.setState({
                result: "Niepoprawny wpis"
            })

        }
    };

    reset = () => {
        // przy wciśnięciu przycisku C
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        // usunięcie poprzedniego wpisu przy użyciu funkcji slice
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                {/* wyświetlenie nagłówka */}
                <Header />
                {/* Kalkulator */}
                <div className="calculator-body">                    
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default MyApp;