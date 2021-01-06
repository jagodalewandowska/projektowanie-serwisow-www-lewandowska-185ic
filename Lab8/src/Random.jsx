import React from 'react';
import Chart from './Chart';

const Random = () => (   
    <div class="container" style={{marginTop: "50px"}}>    
        <div class="row">
            <div class="col-sm">
                <Chart />
            </div>
            <div class="col-sm">
                One of three columns
            </div>
            <div class="col-sm">
                One of three columns
            </div>
        </div>
    </div>
);

export default Random;