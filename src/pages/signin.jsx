import { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('guest');
	const navigate = useNavigate();

	const handleSignin = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Retrieve user role from Firestore
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                setRole(userData.role);  // Set role based on Firestore data
                
                // Navigate based on role
                if (userData.role === 'user') {
                    navigate('/individu');
                } else {
                    navigate('/komunitas');
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[url('./assets/bege.png')] bg-center bg-cover">
			<form className="flex flex-col items-center justify-center bg-[#282C34]/95 w-2/5 max-h-fit rounded-[16px] backdrop-blur-sm gap-3 text-white"
				onSubmit={handleSignin}>

				<div className="flex items-center justify-center w-3/12 mt-8">
					<img src={logo} alt="logo" className="w-[550px]" />
				</div>

				<div className="flex flex-col w-10/12 gap-3 capitalize">
					<label htmlFor="email">Email</label>
					<input type="email" placeholder="example@gmail.com" value={email} name="email" onChange={(e) => setEmail(e.target.value)}
						className="p-6 h-10 focus:outline-none bg-[#CDF5FD] rounded-[12px] text-black" required autoComplete='email'
					/>

					<label htmlFor="password" className="mt-2">Password</label>
					<input type="password" placeholder="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}
						className="p-6 h-10 focus:outline-none bg-[#CDF5FD] rounded-[12px] text-black" 
						required autoComplete='current-password'
					/>

					<button type="submit" className="mt-4 p-2 h-14 rounded-[12px] bg-[#008080] text-white font-bold hover:bg-[#008080]/40">
						Sign In
					</button>
				</div>

				<p className="mt-2 mb-8">Belum punya akun? 
					<span onClick={() => navigate('/signup')} className="text-blue-500 ml-3 cursor-pointer hover:font-bold">Daftar</span>
				</p>
			</form>
		</div>
	);
}
