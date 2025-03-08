import { Link } from "react-router";

const Sidenav = () => {

    return(
        <div className="w-1/6 h-screen bg-gray-500 text-white">
        <div className="m-4">
          <h1 className="text-2xl font-bold">Bayer Health</h1>
        </div>
        <div className="list-none m-4">
          <Link to="/dashboard"><li className="my-2">Dashboard</li></Link>
          <Link to="/profile"><li className="my-2">My Profile</li></Link>
          <Link to="/Health metrics"><li className="my-2">Health metrics</li></Link>
          <Link to="/messages"><li className="my-2">Messages</li></Link>
          <Link to="/"><li className="my-2">Logout</li></Link>
        </div>
      </div>
    )
};


export default Sidenav;