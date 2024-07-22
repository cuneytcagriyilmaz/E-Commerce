import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../store/api/axiosInstance";
import LoadingSpinner from "../../layout/LoadingSpinner";

const AddressInfo = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    id: null,
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
  });
  const [currentAddress, setCurrentAddress] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axiosInstance.get("/user/address");
        if (response.data && Array.isArray(response.data)) {
          const formattedAddresses = response.data.map((address) => ({
            id: address.id,
            title: address.title || "",
            name: address.name || "",
            surname: address.surname || "",
            phone: address.phone || "",
            city: address.city || "",
            district: address.district || "",
            neighborhood: address.neighborhood || "",
            details: address.details || "",
          }));
          setAddresses(formattedAddresses);
          if (formattedAddresses.length > 0) {
            setSelectedAddress(formattedAddresses[0].id);
          }
        } else {
          console.error(
            "No addresses found or unexpected response format:",
            response.data
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching addresses:", error);
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value,
    });
  };

  const handleEditAddress = (address) => {
    setCurrentAddress(address);
    setEditing(true);
    setShowAddAddressForm(true);
    setNewAddress({
      id: address.id,
      title: address.title || "",
      name: address.name || "",
      surname: address.surname || "",
      phone: address.phone || "",
      city: address.city || "",
      district: address.district || "",
      neighborhood: address.neighborhood || "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (editing && currentAddress) {
        response = await axiosInstance.put(`/user/address`, newAddress);
        console.log("Address updated successfully:", response.data);
      } else {
        response = await axiosInstance.post("/user/address", newAddress);
        console.log("Address added successfully:", response.data);
      }

      const fetchResponse = await axiosInstance.get("/user/address");
      if (fetchResponse.data && Array.isArray(fetchResponse.data)) {
        const formattedAddresses = fetchResponse.data.map((address) => ({
          id: address.id,
          title: address.title || "",
          name: address.name || "",
          surname: address.surname || "",
          phone: address.phone || "",
          city: address.city || "",
          district: address.district || "",
          neighborhood: address.neighborhood || "",
          details: address.details || "",
        }));
        setAddresses(formattedAddresses);
        if (!selectedAddress && formattedAddresses.length > 0) {
          setSelectedAddress(formattedAddresses[0].id);
        }
      } else {
        console.error(
          "No addresses found or unexpected response format:",
          fetchResponse.data
        );
      }

      setShowAddAddressForm(false);
      setEditing(false);
      setCurrentAddress(null);
      setNewAddress({
        id: null,
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const response = await axiosInstance.delete(`/user/address/${addressId}`);
      console.log("Address deleted successfully:", response.data);

      const fetchResponse = await axiosInstance.get("/user/address");
      if (fetchResponse.data && Array.isArray(fetchResponse.data)) {
        const formattedAddresses = fetchResponse.data.map((address) => ({
          id: address.id,
          title: address.title || "",
          name: address.name || "",
          surname: address.surname || "",
          phone: address.phone || "",
          city: address.city || "",
          district: address.district || "",
          neighborhood: address.neighborhood || "",
          details: address.details || "",
        }));
        setAddresses(formattedAddresses);
        if (!selectedAddress && formattedAddresses.length > 0) {
          setSelectedAddress(formattedAddresses[0].id);
        }
      } else {
        console.error(
          "No addresses found or unexpected response format:",
          fetchResponse.data
        );
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const handleAddressClick = (addressId) => {
    setSelectedAddress(addressId);
  };

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Teslimat Adresi</h2>
      </div>

      <div className="mb-6">
        <button
          onClick={() => {
            setShowAddAddressForm(true);
            setEditing(false);
          }}
          className="w-full bg-gray-100 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-200"
        >
          <i className="fas fa-plus-circle text-xl mr-2"></i> Yeni Adres Ekle
        </button>
      </div>

      {showAddAddressForm && (
        <div className="mb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adres Başlığı
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newAddress.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adı
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newAddress.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Soyadı
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={newAddress.surname}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefon
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={newAddress.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Şehir
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={newAddress.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  İlçe
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={newAddress.district}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="neighborhood"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mahalle
                </label>
                <input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  value={newAddress.neighborhood}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowAddAddressForm(false)}
                className="mr-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                İptal
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4">Mevcut Adresler</h2>
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <div
              key={address.id}
              className={`mb-4 p-4 border ${
                selectedAddress === address.id ? "border-blue-500" : ""
              }`}
              onClick={() => handleAddressClick(address.id)}
            >
              <h3 className="text-lg font-medium">{address.title}</h3>
              <p>
                {address.name} {address.surname}
              </p>
              <p>{address.phone}</p>
              <p>{address.city}, {address.district}, {address.neighborhood}</p>
              <div className="flex justify-end mt-2">
                <button
                  onClick={() => handleEditAddress(address)}
                  className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => handleDeleteAddress(address.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                >
                  Sil
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Mevcut adres bulunmamaktadır.</p>
        )}
      </div>
    </div>
  );
};

export default AddressInfo;
