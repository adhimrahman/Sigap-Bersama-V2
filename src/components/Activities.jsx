const Activities = () => {
	return (
		<section id="bencana" className="p-10 bg-gray-100">
			<div className="text-center mb-10">
				<h2 className="text-2xl font-bold">Bencana dan Limbah</h2>
				<p>Deskripsi singkat mengenai bencana dan isu lingkungan yang sedang terjadi.</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div className="bg-white shadow-md p-5">
				<h3 className="font-bold">Limbah Lembah Lumba Lumba</h3>
				<p>Deskripsi singkat mengenai masalah limbah...</p>
				<button className="mt-4 px-4 py-2 bg-green-700 text-white rounded">Lihat Aktivitas Lainnya</button>
				</div>
				
				<div className="bg-white shadow-md p-5">
				<h3 className="font-bold">Ini Bencana Ini</h3>
				<p>Deskripsi singkat mengenai bencana...</p>
				<button className="mt-4 px-4 py-2 bg-green-700 text-white rounded">Lihat Aktivitas Lainnya</button>
				</div>
			</div>
		</section>
	);
};

export default Activities;