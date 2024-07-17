// import React, { useState } from "react";

// const AddressInfo = () => {
//   const addresses = [
//     {
//       id: 1,
//       title: "Ev",
//       name: "İsim Soyisim",
//       phone: "(530) *** ** 12",
//       details: "Adres Detayı",
//       type: "Kurumsal",
//     },
//     {
//       id: 2,
//       title: "İş",
//       name: "İsim Soyisim",
//       phone: "(535) *** ** 95",
//       details: "Adres Detayı",
//       type: "",
//     },
//     {
//       id: 3,
//       title: "Diğer",
//       name: "İsim Soyisim",
//       phone: "(530) *** ** 12",
//       details: "Adres Detayı",
//       type: "",
//     },
//     {
//       id: 4,
//       title: "Ayesoft",
//       name: "İsim Soyisim",
//       phone: "(530) *** ** 12",
//       details: "Adres Detayı",
//       type: "Kurumsal",
//     },
//   ];

//   const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

//   return (
//     <div className="bg-white p-6 rounded-lg">
//       {/* Teslimat Adresi Başlığı */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">Teslimat Adresi</h2>
//       </div>

//       {/* Yeni Adres Ekle */}
//       <div className="mb-6">
//         <button className="w-full bg-gray-100 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
//           <i className="fas fa-plus-circle text-xl mr-2"></i> Yeni Adres Ekle
//         </button>
//       </div>

//       {/* Adres Listesi */}
//       <div className="flex flex-wrap -mx-2">
//         {addresses.map((address) => (
//           <div key={address.id} className="w-full lg:w-1/2 px-2 mb-4">
//             <div
//               className={`p-4 rounded-lg ${
//                 selectedAddress === address.id
//                   ? "border-2 border-orange-500"
//                   : "border"
//               }`}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     name="adres"
//                     className="mr-2"
//                     checked={selectedAddress === address.id}
//                     onChange={() => setSelectedAddress(address.id)}
//                   />
//                   <span className="font-semibold">{address.title}</span>
//                 </div>
//                 <button className="text-blue-500">
//                   <i className="fas fa-edit"></i> Düzenle
//                 </button>
//               </div>
//               <div className="text-gray-700">
//                 <p>
//                   <i className="fas fa-user mr-2"></i>
//                   {address.name}
//                 </p>
//                 <p>
//                   <i className="fas fa-phone mr-2"></i>
//                   {address.phone}
//                 </p>
//                 <p>
//                   <i className="fas fa-map-marker-alt mr-2"></i>
//                   {address.details}
//                 </p>
//                 {address.type && (
//                   <span className="bg-gray-300 text-gray-700 text-xs rounded px-2 py-1 inline-block mt-2">
//                     {address.type}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Faturamı Aynı Adrese Gönder */}
//       <div className="flex items-center mt-6">
//         <input type="checkbox" className="mr-2" checked />
//         <span className="text-orange-500 font-semibold">
//           Faturamı Aynı Adrese Gönder
//         </span>
//       </div>
//     </div>
//   );
// };

// export default AddressInfo;
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../store/api/axiosInstance";
import LoadingSpinner from "../../layout/LoadingSpinner";

const AddressInfo = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sameAddress, setSameAddress] = useState(true);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
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
            name: `${address.name} ${address.surname || ""}`,
            phone: address.phone || "",
            details: `${address.address || ""}, ${
              address.neighborhood || ""
            }, ${address.district || ""}, ${address.city || ""}`,
            type: "", // Adjust this if you have type information
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

  // const handleEditAddress = (address) => {
  //   setCurrentAddress(address);
  //   setEditing(true);
  //   setShowAddAddressForm(true);
  //   setNewAddress({
  //     title: address.title || "",
  //     name: address.name.split(" ")[0] || "",
  //     surname: address.name.split(" ")[1] || "",
  //     phone: address.phone || "",
  //     city: address.details.split(", ")[3] || "",
  //     district: address.details.split(", ")[2] || "",
  //     neighborhood: address.details.split(", ")[1] || "",
  //     address: address.details.split(", ")[0] || "",
  //   });
  // };

  const handleEditAddress = (address) => {
    setCurrentAddress(address); // Doğru adres nesnesini aldığınızdan emin olun
    setEditing(true);
    setShowAddAddressForm(true);
    setNewAddress({
      title: address.title || "",
      name: address.name.split(" ")[0] || "",
      surname: address.name.split(" ")[1] || "",
      phone: address.phone || "",
      city: address.details.split(", ")[3] || "",
      district: address.details.split(", ")[2] || "",
      neighborhood: address.details.split(", ")[1] || "",
      address: address.details.split(", ")[0] || "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (editing && currentAddress) {
        response = await axiosInstance.put(
          `/user/address/${currentAddress.id}`,
          newAddress
        );
        console.log("Address updated successfully:", response.data);
      } else {
        response = await axiosInstance.post("/user/address", newAddress);
        console.log("Address added successfully:", response.data);
      }

      // Refetch addresses after modification
      const fetchResponse = await axiosInstance.get("/user/address");
      if (fetchResponse.data && Array.isArray(fetchResponse.data)) {
        const formattedAddresses = fetchResponse.data.map((address) => ({
          id: address.id,
          title: address.title || "",
          name: `${address.name} ${address.surname || ""}`,
          phone: address.phone || "",
          details: `${address.address || ""}, ${address.neighborhood || ""}, ${
            address.district || ""
          }, ${address.city || ""}`,
          type: "", // Adjust this if you have type information
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
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
        address: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let response;
  //     if (editing && currentAddress) {
  //       response = await axiosInstance.put(
  //         `/user/address/${currentAddress.id}`,
  //         newAddress
  //       );
  //       console.log("Address updated successfully:", response.data);
  //     } else {
  //       response = await axiosInstance.post("/user/address", newAddress);
  //       console.log("Address added successfully:", response.data);
  //     }
  //     await fetchAddresses();
  //     setShowAddAddressForm(false);
  //     setEditing(false);
  //     setCurrentAddress(null);
  //     setNewAddress({
  //       title: "",
  //       name: "",
  //       surname: "",
  //       phone: "",
  //       city: "",
  //       district: "",
  //       neighborhood: "",
  //       address: "",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  const handleDeleteAddress = async (addressId) => {
    try {
      const response = await axiosInstance.delete(`/user/address/${addressId}`);
      console.log("Address deleted successfully:", response.data);

      
      const fetchResponse = await axiosInstance.get("/user/address");
      if (fetchResponse.data && Array.isArray(fetchResponse.data)) {
        const formattedAddresses = fetchResponse.data.map((address) => ({
          id: address.id,
          title: address.title || "",
          name: `${address.name} ${address.surname || ""}`,
          phone: address.phone || "",
          details: `${address.address || ""}, ${address.neighborhood || ""}, ${
            address.district || ""
          }, ${address.city || ""}`,
          type: "",  
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

  // const handleDeleteAddress = async (addressId) => {
  //   try {
  //     const response = await axiosInstance.delete(`/user/address/${addressId}`);
  //     console.log("Address deleted successfully:", response.data);
  //     await fetchAddresses(); // Refresh addresses after deletion
  //   } catch (error) {
  //     console.error("Error deleting address:", error);
  //   }
  // };

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
              <div className="col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adres Detayı
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={newAddress.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {editing ? "Adres Güncelle" : "Adres Ekle"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddAddressForm(false);
                  setEditing(false);
                  setCurrentAddress(null);
                  setNewAddress({
                    title: "",
                    name: "",
                    surname: "",
                    phone: "",
                    city: "",
                    district: "",
                    neighborhood: "",
                    address: "",
                  });
                }}
                className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                İptal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="flex flex-wrap -mx-2">
        {addresses.map((address) => (
          <div key={address.id} className="w-full lg:w-1/2 px-2 mb-4">
            <div
              className={`bg-gray-100 p-4 rounded-lg ${
                selectedAddress === address.id
                  ? "border-2 border-yellow-500"
                  : ""
              }`}
              onClick={() => handleAddressClick(address.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <input
                    type="radio"
                    name="address"
                    id={`address-${address.id}`}
                    className="mr-2"
                    checked={selectedAddress === address.id}
                    onChange={() => setSelectedAddress(address.id)}
                  />
                  <label
                    htmlFor={`address-${address.id}`}
                    className="text-lg font-semibold cursor-pointer"
                  >
                    {address.title}
                  </label>
                  <p className="text-sm">{address.name}</p>
                  <p className="text-sm">{address.phone}</p>
                  <p className="text-sm">{address.details}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleEditAddress(address)}
                    className="text-indigo-600 hover:text-indigo-700 mr-2"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDeleteAddress(address.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          className="mr-2"
          checked={sameAddress}
          onChange={() => setSameAddress(!sameAddress)}
        />
        <span className="text-orange-500 font-semibold">
          Faturamı aynı adrese gönder
        </span>
      </div>
    </div>
  );
};

export default AddressInfo;
