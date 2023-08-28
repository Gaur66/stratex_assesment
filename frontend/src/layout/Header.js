import React,{useEffect} from 'react';
import { useAuth } from '../context/auth';
import { AuthList } from '../context/UserLIst';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { dummyData } from './dummyData';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [UserList, setUserList] = AuthList();
  const navigation = useNavigate();


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user_info"));
   const token = localStorage.getItem("token_rare");
       if (token && data) {
      console.log("jfj")
         setAuth({
           ...auth,
           user: data,
           token:token,
         });
    
       }
       //eslint-disable-next-line
     }, []);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    setUserList(dummyData);

    localStorage.removeItem('token_rare');
    localStorage.removeItem('user_info');
    localStorage.removeItem('user_list');
    toast.success('Logout Successfully');
    navigation('/login');
  };

  return (
    <header className="bg-blue-500 p-4 sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-8xl mx-auto">
        <div className="text-white font-semibold text-lg">
          <Link to="/" className="flex items-center space-x-2">
            {/* Insert Dashboard Icon here */}
            <span>Dashboard </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {auth.user && (
            <div className="text-white  ">
              Welcome, {auth.user.name}
            </div>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
