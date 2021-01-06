import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Mod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    // otwieranie modala - widoczność true
    openModal() {
        this.setState({
            visible : true
        });
    }

    // zamykanie modala - widocznosc false
    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
            {/* Utworzenie przycisku z modyfikacją bootstrap */}            
                <input type="button" class="btn btn-outline-info" value="Otworz okno" onClick={() => this.openModal()} />
                {/* Zmiana przejścia oraz wielkości okienka */}
                <Modal visible={this.state.visible} width="500" height="200" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    {/* Tekst w wyskakującym okienku */}
                    <div class="card">
                        <h3>Example</h3>
                        <p>Przykładowe użycie komponentu</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close me!</a>
                    </div>
                </Modal>
            </section>
        );
    }
}