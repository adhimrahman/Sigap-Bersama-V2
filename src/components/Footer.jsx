
const Footer = () => {
	return (
		<footer className="p-5 bg-green-700 text-white">
			<div className="flex justify-between items-center">
				<div>
					<h2 className="font-bold">Sigap Bersama</h2>
					<p>Alamat kantor dan kontak lainnya...</p>
				</div>
				<ul className="flex space-x-4">
					<li><a href="#">Tentang Kami</a></li>
					<li><a href="#">Donasi Sekarang</a></li>
					<li><a href="#">Kontak Kami</a></li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;