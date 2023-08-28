import React, { useEffect, useState } from 'react';
import Modal from './modal';
import { FaPlus } from 'react-icons/fa';
import { AuthList } from '../context/UserLIst';
const dummyData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, country: 'USA' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, country: 'Canada' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 25, country: 'UK' },
  { id: 4, name: 'Michael Brown', email: 'michael@example.com', age: 32, country: 'Australia' },
  { id: 5, name: 'Emily White', email: 'emily@example.com', age: 29, country: 'New Zealand' },
  { id: 6, name: 'David Lee', email: 'david@example.com', age: 27, country: 'Germany' },
  { id: 7, name: 'Olivia Davis', email: 'olivia@example.com', age: 26, country: 'France' },
  { id: 8, name: 'Daniel Martinez', email: 'daniel@example.com', age: 31, country: 'Spain' },
  { id: 9, name: 'Sophia Johnson', email: 'sophia@example.com', age: 28, country: 'Canada' },
  { id: 10, name: 'Liam Taylor', email: 'liam@example.com', age: 33, country: 'USA' },
];


const UserData = () => {

    const [UserList, setUserList] = AuthList()

   
    
    const [editingItemId, setEditingItemId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      email: '',
      age: '',
      country: '',
    });
  
    const handleEdit = (id) => {
      const itemToEdit = UserList.find(item => item.id === id);
      setEditingItemId(id);
      setFormData(itemToEdit);
      setIsModalOpen(true);
    };
  
    const handleUpdate = () => {
      const updatedData = UserList.map(item => (item.id === editingItemId ? formData : item));
      setUserList(updatedData);
      setEditingItemId(null);
      setFormData({
        id: '',
        name: '',
        email: '',
        age: '',
        country: '',
      });
      setIsModalOpen(false);
    };
  
    const handleDelete = (id) => {
      const updatedData = UserList.filter(item => item.id !== id);
      setUserList(updatedData);
    };
  
    const handleInputChange = (field, value) => {
      setFormData(prevFormData => ({ ...prevFormData, [field]: value }));
    };
  
    const handleAdd = () => {
      const newId = UserList.length > 0 ? UserList[UserList.length - 1].id + 1 : 1;
  
      const newUser = {
        id: newId,
        name: formData.name,
        email: formData.email,
        age: formData.age,
        country: formData.country,
      };
  
      setUserList([...UserList, newUser]);
      
  
      setFormData({
        id: '',
        name: '',
        email: '',
        age: '',
        country: '',
      });
  
      setIsAddModalOpen(false); // Close the add modal
    };
  
    function onClose() {
      setFormData({
        id: '',
        name: '',
        email: '',
        age: '',
        country: '',
      });
      setIsModalOpen(false);
      setIsAddModalOpen(false); // Close the add modal
    }

    useEffect(() => {
        const storedData = localStorage.getItem("user_list");
        console.log(storedData)
        if (storedData) {
            console.log("jf")
            setUserList(JSON.parse(storedData));
        }
    }, []);
    useEffect(()=>{
        console.log("errort")
localStorage.setItem("user_list",JSON.stringify(UserList))
    },[UserList])
  
    return (
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <div className="flex justify-end p-4">
          <button
            className="flex items-center text-black-500 text-lg"
            onClick={() => setIsAddModalOpen(true)} // Open the add modal
          >
            Add Item <FaPlus className="ml-2" />
          </button>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {UserList.map(item => (
              <tr key={item.id}>
                <td className="border px-4 py-2 text-center">{item.id}</td>
                <td className="border px-4 py-2 text-center">{item.name}</td>
                <td className="border px-4 py-2 text-center">{item.email}</td>
                <td className="border px-4 py-2 text-center">{item.age}</td>
                <td className="border px-4 py-2 text-center">{item.country}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          isOpen={isModalOpen}
          onClose={onClose}
          formData={formData}
          handleUpdate={handleUpdate}
          handleInputChange={handleInputChange}
        />
        <Modal
          isOpen={isAddModalOpen}
          onClose={onClose}
          formData={formData}
          handleUpdate={handleAdd}
          handleInputChange={handleInputChange}
        />
      </div>
    );
  };
  
  export default UserData;
 
  
  
  
  
  
  