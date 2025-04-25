import React from 'react';
import { ScaleLoader } from 'react-spinners';


const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <ScaleLoader size={250} color='#224F34'></ScaleLoader>
        </div>
    );
};

export default Loading;