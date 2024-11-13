import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function SignupIndividu({ handleSignup, setEmail, setPassword, setConfirmPassword, setFullName,
    email, password, confirmPassword, fullName }) {

    const navigate = useNavigate();

    return (
        <form className="flex flex-col items-center justify-center bg-[#282C34]/95 w-2/5 h-fit rounded-[16px] backdrop-blur-sm gap-5"
            onSubmit={handleSignup}>
            <h2 className="text-white text-xl mb-4 mt-8 font-bold tracking-wider">Pendaftaran Individu</h2>
            
            <div className='flex flex-col w-10/12 gap-3 capitalize'>
                <label htmlFor="fullName" className='mt-2'>Nama Lengkap</label>
                <input 
                    type="text" 
                    placeholder="Nama Lengkap" 
                    value={fullName} 
                    name='fullName' 
                    onChange={(e) => setFullName(e.target.value)}
                    className="p-6 h-10 focus:outline-none bg-[#CDF5FD] rounded-[12px] text-black" 
                    required 
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    value={email} 
                    name='email' 
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-6 h-10 focus:outline-none bg-[#CDF5FD] rounded-[12px] text-black" 
                    required 
                />

                <label htmlFor="password" className='mt-2'>Password</label>
                <input 
                    type="password" 
                    placeholder="password" 
                    value={password} 
                    name='password' 
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-6 h-10 focus:outline-none bg-[#CDF5FD] rounded-[12px] text-black" 
                    required 
                />
                
                <label htmlFor="confirmPassword" className='mt-2'>Confirm Password</label>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    name='confirmPassword'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="p-6 h-10 focus:outline-none bg-[#CDF5FD] rounded-[12px] text-black" 
                    required 
                />

                <button 
                    type="submit"
                    className="p-2 h-14 w-full mt-4 bg-[#008080] text-white font-bold rounded-[12px] hover:bg-[#008080]/40"
                >
                    Daftar
                </button>
            </div>
        
            <p className="mt-2 mb-8">Sudah punya akun? 
                <span 
                    onClick={() => navigate('/signin')} 
                    className='text-blue-500 ml-3 cursor-pointer hover:font-bold'
                >
                    Login
                </span>
            </p>
        </form>
    );
}

SignupIndividu.propTypes = {
    handleSignup: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setConfirmPassword: PropTypes.func.isRequired,
    setFullName: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
};