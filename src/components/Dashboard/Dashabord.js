const Dashboard = () => {
    return(
        <div className="flex">
            <div className="w-1/6 h-screen bg-gray-500 text-white">
            <div className="m-4">
                <h1 className="text-2xl font-bold">Bayer Health</h1>
            </div>
                <div className="list-none m-4">
                    <li className="my-2">Dashboard</li>
                    <li className="my-2">My Profile</li>
                    <li className="my-2">Health metrics</li>
                    <li className="my-2">Messages</li>
                    <li className="my-2">Logout</li>
                </div>
            </div>
            <div className="w-4/6 h-full bg-gray-50">
            <div className="m-4 p-4">
                <div className="mb-6">
                    <h1 className="text-4xl font-bold">Welcome, David</h1>
                </div>

                <div className="bg-white pt-6 px-4">
                    <h1 className="text-2xl font-semibold">Health metrics</h1>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard;