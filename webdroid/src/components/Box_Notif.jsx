import React from 'react';
import { notifikasi } from '../constants';


const Lingkaran = ({ bunder }) => (
    <div className="absolute inline-block">
        <div className="absolute top-[-10px] left-[-10px] w-14 h-14 bg-warnaUnggu rounded-full z-0 opacity-30">{bunder}</div>
    </div>
)


const Box_Notif = () => {
    return (
        <div className='flex items-start w-full  justify-center'>
            <div className='lg:ml-4 lg:w-[750px]'>
                <h1 className='relative text-3xl font-black mb-7'>
                    <Lingkaran />
                    Notifikasi
                </h1>
                {notifikasi.slice(0, notifikasi.length).map((e) => (
                    <div key={e.name} className='mb-4'>
                        <div className='p-3 rounded-sm outline outline-1'>
                            <div className='flex items-center'>
                                <p className='pl-3 text-base font-medium text-gray-900'>{e.title} <span className='font-bold'>{e.ket}</span> {e.kadal}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Box_Notif;
