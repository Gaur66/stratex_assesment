// EditModal.js

import React from 'react';

const EditModal = ({ isOpen, onClose, formData, handleUpdate, handleInputChange }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Edit User</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name:</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <input
                type="email"
                className="border rounded w-full py-2 px-3"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Age:</label>
              <input
                type="number"
                className="border rounded w-full py-2 px-3"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country:</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleUpdate}
            >
             {formData.id ?"update":"Add"}
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditModal;
