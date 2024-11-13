<<<<<<< HEAD
import React from 'react';

function ProfilePage() {
    return (
        <div className="min-h-screen bg-green-100 flex flex-col items-center p-6">
            {/* Header */}
            <header className="w-full bg-green-600 p-4 text-white text-center font-bold text-2xl">
                SIGAP BERSAMA
            </header>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg mt-6 w-full max-w-5xl p-6">
                
                {/* Profile Information */}
                <div className="flex flex-col items-center md:w-1/4 p-4 border-r border-gray-200">
                    <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center text-gray-500">
                        {/* Placeholder for Profile Picture */}
                        Foto
                    </div>
                    <h2 className="mt-4 font-bold text-xl">Nama Pengguna</h2>
                    <p className="text-gray-600">Lokasi: Jakarta, Indonesia</p>
                </div>

                {/* Main Dashboard Content */}
                <div className="flex-1 p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        
                        {/* Activity Section */}
                        <div className="w-full md:w-1/2 bg-green-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Aktivitas</h3>
                            <ul className="space-y-2">
                                <li className="bg-white p-2 rounded shadow">Melaporkan Bencana di Jakarta</li>
                                <li className="bg-white p-2 rounded shadow">Menyumbangkan Donasi untuk Gempa</li>
                                <li className="bg-white p-2 rounded shadow">Bergabung dengan Komunitas Lingkungan</li>
                            </ul>
                        </div>

                        {/* Contribution Section */}
                        <div className="w-full md:w-1/2 bg-green-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Kontribusi</h3>
                            <ul className="space-y-2">
                                <li className="bg-white p-2 rounded shadow">5 Laporan Bencana</li>
                                <li className="bg-white p-2 rounded shadow">3 Komunitas yang Diikuti</li>
                                <li className="bg-white p-2 rounded shadow">2 Donasi yang Diberikan</li>
                            </ul>
                        </div>
                    </div>

                    {/* Location and Community Involvement */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Location */}
                        <div className="bg-green-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Lokasi</h3>
                            <p>Jakarta, Indonesia</p>
                            <p>Bencana Terkini: Banjir, Longsor</p>
                        </div>

                        {/* Community Involvement */}
                        <div className="bg-green-50 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">Komunitas</h3>
                            <p>Aktif di Komunitas Lingkungan dan Tanggap Bencana</p>
                            <p>Jumlah Komunitas yang Diikuti: 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
=======
import { useState } from 'react';
import { auth } from '../../firebase/';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
			await createUserWithEmailAndPassword(auth, email, password);
			navigate('/individu'); // Or redirect to another page
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[url('/bege.png')] bg-center bg-cover">
			<SignupIndividu 
				handleSignup={handleSignup} 
				setEmail={setEmail} 
				setPassword={setPassword} 
				setConfirmPassword={setConfirmPassword}
				setFullName={setFullName} 
				email={email} 
				password={password} 
				confirmPassword={confirmPassword} 
				fullName={fullName} 
			/>
			{errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
		</div>
	);
}
>>>>>>> 7912c054e68aa14a7b507bf7ef76d4960c1ad307
