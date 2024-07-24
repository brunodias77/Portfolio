import { title } from 'process';
import React from 'react';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className='mb-10'>
            <h2 className="text-3xl text-center text-white font-black">{title}</h2>
            <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded"></hr>
        </div>
    );
};

export default SectionTitle;