import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skillbar(props) {
    return (
        <>
            <div className='flex flex-col sm:ml-20 ml-4'>
                <div className=' mt-10 mb-2 ml-4'>
                    <h1 className='text-white text-center text-2xl font-bold'>{props.name}</h1>
                </div>

                <CircularProgressbar value={props.percentage} text={`${props.percentage}%`}
                    styles={buildStyles({
                        textColor: 'yellow',
                    })}
                />;
            </div>
        </>
    )
}

export default Skillbar