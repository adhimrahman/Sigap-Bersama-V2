
const ProfileDashboard = () => {
  return (
    <div className="flex h-screen font-sans text-gray-800">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-100 p-4 fixed top-0 left-0 h-full">
        <a href="#dashboard" className="block py-2 text-lg text-gray-700 hover:bg-gray-300">Dashboard</a>
        <a href="#edit-profile" className="block py-2 text-lg text-gray-700 hover:bg-gray-300">Edit Profile</a>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[20%] p-6 overflow-auto">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-green-700 text-white p-4 fixed top-0 left-0 w-full z-10">
          <h1 className="text-xl">Sigap Bersama</h1>
          <nav>
            <a href="#bencana" className="text-white mx-2 hover:underline">Bencana</a>
            <a href="#limbah" className="text-white mx-2 hover:underline">Limbah</a>
            <a href="#interest" className="text-white mx-2 hover:underline">Interest</a>
            <a href="#my-event" className="text-white mx-2 hover:underline">My Event</a>
          </nav>
          <div className="text-2xl">👤</div>
        </header>

        {/* Profile Section */}
        <div className="profile-section bg-gray-50 p-6 rounded-lg shadow-md mt-[80px]">
          <h2 className="text-2xl mb-4">Profil</h2>
          <div className="profile-card text-center">
            <div className="profile-picture w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl">Kelompok 17</h2>
            <div className="profile-stats mt-4 border-t pt-4">
              <div>Aktivitas yang telah diikuti <span>10</span></div>
              <div>Lencana <span>8</span></div>
              <div>Poin <span>5385</span></div>
            </div>
          </div>
        </div>

        {/* Aktivitas Section */}
        <div className="activity-section mt-6">
          <h2 className="text-2xl mb-4">Aktivitas</h2>
          <div className="activity-grid grid grid-cols-2 gap-6">
            <div className="activity-box bg-gray-300 p-4 rounded-lg flex flex-col">
              <img src="https://via.placeholder.com/150" alt="Aktivitas 1" className="activity-image w-full h-24 object-cover rounded-lg mb-4" />
              <p className="activity-text text-center">MELAKSANAKAN KEGIATAN DENGAN PANDAWARA</p>
            </div>
            <div className="activity-box bg-gray-300 p-4 rounded-lg flex flex-col">
              <img src="https://via.placeholder.com/150" alt="Aktivitas 2" className="activity-image w-full h-24 object-cover rounded-lg mb-4" />
              <p className="activity-text text-center">judul</p>
            </div>
            <div className="activity-box bg-gray-300 p-4 rounded-lg flex flex-col">
              <img src="https://via.placeholder.com/150" alt="Aktivitas 3" className="activity-image w-full h-24 object-cover rounded-lg mb-4" />
              <p className="activity-text text-center">judul</p>
            </div>
            <div className="activity-box bg-gray-300 p-4 rounded-lg flex flex-col">
              <img src="https://via.placeholder.com/150" alt="Aktivitas 4" className="activity-image w-full h-24 object-cover rounded-lg mb-4" />
              <p className="activity-text text-center">judul</p>
            </div>
            <div className="activity-box bg-gray-300 p-4 rounded-lg flex flex-col">
              <img src="https://via.placeholder.com/150" alt="Aktivitas 5" className="activity-image w-full h-24 object-cover rounded-lg mb-4" />
              <p className="activity-text text-center">judul</p>
            </div>
            <div className="activity-box bg-gray-300 p-4 rounded-lg flex flex-col">
              <img src="https://via.placeholder.com/150" alt="Aktivitas 6" className="activity-image w-full h-24 object-cover rounded-lg mb-4" />
              <p className="activity-text text-center">judul</p>
            </div>
          </div>
        </div>

        {/* Lencana Section */}
        <div className="badges-section bg-gray-50 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl mb-4">Lencana</h2>
          <div className="badges-box bg-gray-300 h-40 rounded-lg"></div>
        </div>

        {/* Komunitas Section */}
        <div className="community-section bg-gray-50 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl mb-4">Komunitas</h2>
          <div className="community-box bg-gray-300 h-40 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;