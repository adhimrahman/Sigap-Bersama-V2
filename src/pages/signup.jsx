import { useState } from 'react';
import { auth, db } from '../../firebase/';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import SignupIndividu from '../components/signupIndividu';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [fullName, setFullName] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

	const handleSignup = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) { 
            return setErrorMessage("Passwords do not match"); 
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Assign user role in Firestore
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                role: 'user',  // Assign role as 'user' after signup
                fullName: fullName,
            });

            navigate('/individu');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[url('./assets/bege.png')] bg-center bg-cover text-white">
			<SignupIndividu handleSignup={handleSignup} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword}
				setFullName={setFullName} email={email} password={password} confirmPassword={confirmPassword} fullName={fullName} 
			/>
			{errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
		</div>
	);
}
