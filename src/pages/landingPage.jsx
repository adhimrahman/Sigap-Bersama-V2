import { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Activities from '../components/Activities';
import Footer from '../components/Footer';

const LandingPage = () => {
	const [userName, setUserName] = useState('');

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				// fetch username dari fire soter
				const userDoc = await getDoc(doc(db, "users", user.uid));
				if (userDoc.exists()) {
					const userData = userDoc.data();
					setUserName(userData.fullName || 'Guest');
				}
			} else {
				setUserName('');
			}
		});

		return unsubscribe;
	}, []);

	return (
		<div>
			<Navbar userName={userName} />
			<Hero userName={userName} />
			<Activities userName={userName} />
			<Footer />
		</div>
	);
};

export default LandingPage;