import { useState } from 'react';
import { logo } from '../assets';
import { ContentRegis, ContentLogin } from '../components'

const Register = () => {
    const [Regis, setRegis] = useState(false);

    return (
        <div className="w-full overflow-hidden bg-white">

            <div className="w-full md:px-[120px] px-7 bg-white fixed z-[10]">
                <nav className="w-full flex py-3 items-center navbar flex-1 justify-between">
                    <img src={logo} alt="logo" className="w-[80px] h-[55px] cursor-pointer flex justify-start" />

                    <ul className="list-none flex justify-end items-center flex-1">
                        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] sm:mr-[65px] mr-[30px]`}>
                            <a href="#" className={`border-b-2 ${Regis ? "border-none" : "border-b-[#5d6af8] text-[#5d6af8]"}`} onClick={() => setRegis(false)}>
                                Masuk
                            </a>
                        </li>
                        <li className={`font-poppins font-semibold cursor-pointer text-black hover:text-[#5d6af8] text-[20px] sm:mr-[65px] mr-[30px]`}>
                            <a href="#" className={`border-b-2 ${Regis ? "border-b-[#5d6af8] text-[#5d6af8]" : "border-none"}`} onClick={() => setRegis(true)}>
                                Daftar
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="w-full md:px-[120px] px-7 bg-white fixed mt-20 z-[10]">
                <div className={`w-full ${Regis ? '' : 'hidden'}`}>
                    <ContentRegis />
                </div>
                <div className={`w-full ${Regis ? 'hidden' : ''}`}>
                    <ContentLogin />
                </div>
            </div>

        </div>
    )
}

export default Register