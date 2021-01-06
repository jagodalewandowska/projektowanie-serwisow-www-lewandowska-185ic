import React from 'react';
import Chart from './Chart';
import Modal from './Modal';

const Random = () => (   
    <div class="container" style={{marginTop: "50px"}}>    
        <div class="row">
            <div class="col-sm">
                <Chart />
            </div>
            <div class="col-sm">  
            <div class="cfont">Wciśnij przycisk:</div>              
                <Modal />
            </div>
        </div>
    </div>
);

export default Random;