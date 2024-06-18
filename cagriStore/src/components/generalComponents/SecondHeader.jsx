
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import Gravatar from 'react-gravatar';  
// import { setUser } from '../../store/actions/clientActions';

// const menuItems = [
//     { name: 'Home', to: '/' },
//     { name: 'Shop', to: '#' },
//     { name: 'Pricing', to: '/pricing' },
//     { name: 'Contact', to: '/contact' },
//     { name: 'About Us', to: '/aboutus' },
//     { name: 'Team', to: '/team' },
//     { name: 'Pages', to: '/pages' },
// ];

// const dropdownItems = [
//     {
//         category: 'Kadın', items: [
//             { name: 'Shop', to: '/shop' },
//             { name: 'Tişört', to: '/shop/kadin/tisort' },
//             { name: 'Ayakkabı', to: '/shop/kadin/ayakkabi' },
//             { name: 'Ceket', to: '/shop/kadin/ceket' },
//             { name: 'Elbise', to: '/shop/kadin/elbise' },
//             { name: 'Etek', to: '/shop/kadin/etek' },
//             { name: 'Gömlek', to: '/shop/kadin/gomlek' },
//             { name: 'Kazak', to: '/shop/kadin/kazak' },
//             { name: 'Pantolon', to: '/shop/kadin/pantolon' },
//         ]
//     },
//     {
//         category: 'Erkek', items: [
//             { name: 'Ayakkabı', to: '/shop/erkek/ayakkabi' },
//             { name: 'Ceket', to: '/shop/erkek/ceket' },
//             { name: 'Gömlek', to: '/shop/erkek/gomlek' },
//             { name: 'Kazak', to: '/shop/erkek/kazak' },
//             { name: 'Pantolon', to: '/shop/erkek/pantolon' },
//             { name: 'Tişört', to: '/shop/erkek/tisort' },
//         ]
//     },
// ];

// const SecondHeader = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isShopDropDownOpen, setIsShopDropDownOpen] = useState(false);
//     const user = useSelector(state => state.client.user);
//     const dispatch = useDispatch();

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//     const toggleShopDropdown = (e) => {
//         e.preventDefault();
//         setIsShopDropDownOpen(!isShopDropDownOpen);
//     };

//     const handleLogout = () => {
//         dispatch(setUser(null));
//         localStorage.removeItem('token');
//     };

//     const renderDropdown = () => (
//         <div className="bg-white shadow-md absolute mt-2 w-auto rounded-md py-2 text-gray-700 flex">
//             {dropdownItems.map((dropdown) => (
//                 <div key={dropdown.category} className="mr-4">
//                     <h3 className="font-semibold">{dropdown.category}</h3>
//                     {dropdown.items.map((item) => (
//                         <Link key={item.to} to={item.to} className="block px-4 py-2 hover:bg-gray-100">{item.name}</Link>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );

//     return (
//         <header className="bg-white mt-6 relative z-10 mb-4">
//             <div className="px-4 justify-between flex items-center w-[92%] mx-auto">
//                 <div className='flex items-center space-x-28'>
//                     <Link to="/" className="font-bold text-xl">Bandage</Link>
//                     <nav className="hidden md:flex space-x-6 items-center relative">
//                         {menuItems.map((item) => (
//                             <div key={item.name} className="relative">
//                                 <Link to={item.to} className="text-gray-500 hover:text-gray-700" onClick={item.name === 'Shop' ? toggleShopDropdown : undefined}>
//                                     {item.name}
//                                     {item.name === 'Shop' && (
//                                         <i className={`ml-2 fas fa-chevron-${isShopDropDownOpen ? 'up' : 'down'}`}></i>
//                                     )}
//                                 </Link>
//                                 {item.name === 'Shop' && isShopDropDownOpen && renderDropdown()}
//                             </div>
//                         ))}
//                     </nav>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     {user ? (
//                         <div className="flex items-center gap-2">
//                             <Gravatar email={user.email} size={32} className="rounded-full" />  
//                             <span className="text-navbarLigthBlue">{user.name}</span>
//                             <button className="text-navbarLigthBlue hover:underline" onClick={handleLogout}>Logout</button>
//                         </div>
//                     ) : (
//                         <>
//                             <i className="fas fa-user hidden md:block text-navbarLigthBlue cursor-pointer"></i>
//                             <Link to="/signup" className="hidden md:block text-navbarLigthBlue hover:underline">Login / Register</Link>
//                         </>
//                     )}
//                     <div className="items-end"></div>
//                     <i className="fas fa-search text-gray-700 md:text-navbarLigthBlue cursor-pointer"></i>
//                     <i className="fas fa-shopping-cart text-gray-700 md:text-navbarLigthBlue cursor-pointer"></i>
//                     <i className="fa-regular fa-heart hidden md:block text-navbarLigthBlue cursor-pointer"></i>
//                     <i className={`fas fa-bars text-3xl cursor-pointer md:hidden`} onClick={toggleMenu}></i>
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <div className="bg-white shadow-md md:hidden">
//                     <div className="flex flex-col items-center">
//                         <ul className="p-4">
//                             {menuItems.map((item) => (
//                                 <li key={item.name} className="py-2">
//                                     <Link to={item.to} className="block text-gray-700 hover:text-blue-500" onClick={item.name === 'Shop' ? toggleShopDropdown : undefined}>
//                                         {item.name}
//                                         {item.name === 'Shop' && (
//                                             <i className={`ml-2 fas fa-chevron-${isShopDropDownOpen ? 'up' : 'down'}`}></i>
//                                         )}
//                                     </Link>
//                                     {item.name === 'Shop' && isShopDropDownOpen && (
//                                         <div className="bg-white shadow-md mt-2 w-48 rounded-md py-2 text-gray-700">
//                                             {dropdownItems.map((dropdown) => (
//                                                 <div key={dropdown.category}>
//                                                     <Link to="#" className="block px-4 py-1 hover:bg-gray-100 font-bold">{dropdown.category}</Link>
//                                                     {dropdown.items.map((subItem) => (
//                                                         <Link key={subItem.to} to={subItem.to} className="block px-4 py-1 hover:bg-gray-100">{subItem.name}</Link>
//                                                     ))}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default SecondHeader;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from '../../store/api/loginConfig';
// import Gravatar from 'react-gravatar';
// import { setUser } from '../../store/actions/clientActions';

// const menuItems = [
//     { name: 'Home', to: '/' },
//     { name: 'Shop', to: '/shop' },
//     { name: 'Pricing', to: '/pricing' },
//     { name: 'Contact', to: '/contact' },
//     { name: 'About Us', to: '/aboutus' },
//     { name: 'Team', to: '/team' },
//     { name: 'Pages', to: '/pages' },
// ];

// const dropdownItems = [
//     {
//         category: 'Kadın', items: [
//             // { name: 'Shop', to: '/shop' },
//             { name: 'Tişört', to: '/shop/kadin/tisort' },
//             { name: 'Ayakkabı', to: '/shop/kadin/ayakkabi' },
//             { name: 'Ceket', to: '/shop/kadin/ceket' },
//             { name: 'Elbise', to: '/shop/kadin/elbise' },
//             { name: 'Etek', to: '/shop/kadin/etek' },
//             { name: 'Gömlek', to: '/shop/kadin/gomlek' },
//             { name: 'Kazak', to: '/shop/kadin/kazak' },
//             { name: 'Pantolon', to: '/shop/kadin/pantolon' },
//         ]
//     },
//     {
//         category: 'Erkek', items: [
//             { name: 'Ayakkabı', to: '/shop/erkek/ayakkabi' },
//             { name: 'Ceket', to: '/shop/erkek/ceket' },
//             { name: 'Gömlek', to: '/shop/erkek/gomlek' },
//             { name: 'Kazak', to: '/shop/erkek/kazak' },
//             { name: 'Pantolon', to: '/shop/erkek/pantolon' },
//             { name: 'Tişört', to: '/shop/erkek/tisort' },
//         ]
//     },
// ];

// const SecondHeader = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isShopDropDownOpen, setIsShopDropDownOpen] = useState(false);
//     const user = useSelector(state => state.client.user);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         console.log("Initial token from localStorage:", token);

//         if (token) {
//             axios.defaults.headers.common['Authorization'] = token;
//             console.log("Token set in axios headers:", axios.defaults.headers.common['Authorization']);

//             axios.get('/verify')
//                 .then(response => {
//                     console.log("Response from /verify:", response.data);
//                     if (response.data && response.data.token) {
//                         const userData = {
//                             name: response.data.name,
//                             email: response.data.email,
//                             role_id: response.data.role_id,
//                         };
//                         dispatch(setUser(userData));
//                         localStorage.setItem('token', response.data.token);
//                         axios.defaults.headers.common['Authorization'] = response.data.token;
//                         console.log("New token set in localStorage and axios headers:", response.data.token);
//                     } else {
//                         console.error("Invalid response data:", response.data);
//                         handleInvalidToken();
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Token verification failed:", error);
//                     handleInvalidToken();
//                 });
//         }
//     }, [dispatch]);

//     const handleInvalidToken = () => {
//         localStorage.removeItem('token');
//         delete axios.defaults.headers.common['Authorization'];
//         dispatch(setUser(null));
//     };

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//     const toggleShopDropdown = (e) => {
//         e.preventDefault();
//         setIsShopDropDownOpen(!isShopDropDownOpen);
//     };

//     const handleLogout = () => {
//         dispatch(setUser(null));
//         localStorage.removeItem('token');
//         delete axios.defaults.headers.common['Authorization'];
//     };

//     const renderDropdown = () => (
//         <div className="bg-white shadow-md absolute mt-2 w-auto rounded-md py-2 text-gray-700 flex">
//             {dropdownItems.map((dropdown) => (
//                 <div key={dropdown.category} className="mr-4">
//                     <h3 className="font-semibold">{dropdown.category}</h3>
//                     {dropdown.items.map((item) => (
//                         <Link key={item.to} to={item.to} className="block px-4 py-2 hover:bg-gray-100">{item.name}</Link>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );

//     return (
//         <header className="bg-white mt-6 relative z-10 mb-4">
//             <div className="px-4 justify-between flex items-center w-[92%] mx-auto">
//                 <div className='flex items-center space-x-28'>
//                     <Link to="/" className="font-bold text-xl">Bandage</Link>
//                     <nav className="hidden md:flex space-x-6 items-center relative">
//                         {menuItems.map((item) => (
//                             <div key={item.name} className="relative">
//                                 <Link to={item.to} className="text-gray-500 hover:text-gray-700" onClick={item.name === 'Shop' ? toggleShopDropdown : undefined}>
//                                     {item.name}
//                                     {item.name === 'Shop' && (
//                                         <i className={`ml-2 fas fa-chevron-${isShopDropDownOpen ? 'up' : 'down'}`}></i>
//                                     )}
//                                 </Link>
//                                 {item.name === 'Shop' && isShopDropDownOpen && renderDropdown()}
//                             </div>
//                         ))}
//                     </nav>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     {user ? (
//                         <div className="flex items-center gap-2">
//                             <Gravatar email={user.email} size={32} className="rounded-full" />
//                             <span className="text-navbarLigthBlue">{user.name}</span>
//                             <button className="text-navbarLigthBlue hover:underline" onClick={handleLogout}>Logout</button>
//                         </div>
//                     ) : (
//                         <>
//                             <i className="fas fa-user hidden md:block text-navbarLigthBlue cursor-pointer"></i>
//                             <Link to="/signup" className="hidden md:block text-navbarLigthBlue hover:underline">Login / Register</Link>
//                         </>
//                     )}
//                     <div className="items-end"></div>
//                     <i className="fas fa-search text-gray-700 md:text-navbarLigthBlue cursor-pointer"></i>
//                     <i className="fas fa-shopping-cart text-gray-700 md:text-navbarLigthBlue cursor-pointer"></i>
//                     <i className="fa-regular fa-heart hidden md:block text-navbarLigthBlue cursor-pointer"></i>
//                     <i className={`fas fa-bars text-3xl cursor-pointer md:hidden`} onClick={toggleMenu}></i>
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <div className="bg-white shadow-md md:hidden">
//                     <div className="flex flex-col items-center">
//                         <ul className="p-4">
//                             {menuItems.map((item) => (
//                                 <li key={item.name} className="py-2">
//                                     <Link to={item.to} className="block text-gray-700 hover:text-blue-500" onClick={item.name === 'Shop' ? toggleShopDropdown : undefined}>
//                                         {item.name}
//                                         {item.name === 'Shop' && (
//                                             <i className={`ml-2 fas fa-chevron-${isShopDropDownOpen ? 'up' : 'down'}`}></i>
//                                         )}
//                                     </Link>
//                                     {item.name === 'Shop' && isShopDropDownOpen && (
//                                         <div className="bg-white shadow-md mt-2 w-48 rounded-md py-2 text-gray-700">
//                                             {dropdownItems.map((dropdown) => (
//                                                 <div key={dropdown.category}>
//                                                     <Link to="#" className="block px-4 py-2 font-semibold hover:bg-gray-100">{dropdown.category}</Link>
//                                                     {dropdown.items.map((subItem) => (
//                                                         <Link key={subItem.to} to={subItem.to} className="block px-4 py-2 hover:bg-gray-100">{subItem.name}</Link>
//                                                     ))}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default SecondHeader;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../store/api/loginConfig';
import Gravatar from 'react-gravatar';
import { setUser } from '../../store/actions/clientActions';

const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'Shop', to: '/shop' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Contact', to: '/contact' },
    { name: 'About Us', to: '/aboutus' },
    { name: 'Team', to: '/team' },
    { name: 'Pages', to: '/pages' },
];

const dropdownItems = [
    {
        category: 'Kadın', items: [
            { name: 'Tişört', to: '/shop/kadin/tisort' },
            { name: 'Ayakkabı', to: '/shop/kadin/ayakkabi' },
            { name: 'Ceket', to: '/shop/kadin/ceket' },
            { name: 'Elbise', to: '/shop/kadin/elbise' },
            { name: 'Etek', to: '/shop/kadin/etek' },
            { name: 'Gömlek', to: '/shop/kadin/gomlek' },
            { name: 'Kazak', to: '/shop/kadin/kazak' },
            { name: 'Pantolon', to: '/shop/kadin/pantolon' },
        ]
    },
    {
        category: 'Erkek', items: [
            { name: 'Ayakkabı', to: '/shop/erkek/ayakkabi' },
            { name: 'Ceket', to: '/shop/erkek/ceket' },
            { name: 'Gömlek', to: '/shop/erkek/gomlek' },
            { name: 'Kazak', to: '/shop/erkek/kazak' },
            { name: 'Pantolon', to: '/shop/erkek/pantolon' },
            { name: 'Tişört', to: '/shop/erkek/tisort' },
        ]
    },
];

const SecondHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopDropDownOpen, setIsShopDropDownOpen] = useState(false);
    const user = useSelector(state => state.client.user);
    const dispatch = useDispatch();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleShopDropdown = (e) => {
        e.stopPropagation();
        setIsShopDropDownOpen(!isShopDropDownOpen);
    };

    const handleLogout = () => {
        dispatch(setUser(null));
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    const renderDropdown = () => (
        <div className="bg-white shadow-md absolute mt-2 w-auto rounded-md py-2 text-gray-700 flex">
            {dropdownItems.map((dropdown) => (
                <div key={dropdown.category} className="mr-4">
                    <h3 className="font-semibold">{dropdown.category}</h3>
                    {dropdown.items.map((item) => (
                        <Link key={item.to} to={item.to} className="block px-4 py-2 hover:bg-gray-100">{item.name}</Link>
                    ))}
                </div>
            ))}
        </div>
    );

    return (
        <header className="bg-white mt-6 relative z-10 mb-4">
            <div className="px-4 justify-between flex items-center w-[92%] mx-auto">
                <div className='flex items-center space-x-28'>
                    <Link to="/" className="font-bold text-xl">Bandage</Link>
                    <nav className="hidden md:flex space-x-6 items-center relative">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative">
                                <Link to={item.to} className="text-gray-500 hover:text-gray-700">
                                    {item.name}
                                </Link>
                                {item.name === 'Shop' && (
                                    <i className={`ml-2 fas fa-chevron-${isShopDropDownOpen ? 'up' : 'down'} cursor-pointer`} onClick={toggleShopDropdown}></i>
                                )}
                                {item.name === 'Shop' && isShopDropDownOpen && renderDropdown()}
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <Gravatar email={user.email} size={32} className="rounded-full" />
                            <span className="text-navbarLigthBlue">{user.name}</span>
                            <button className="text-navbarLigthBlue hover:underline" onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <>
                            <i className="fas fa-user hidden md:block text-navbarLigthBlue cursor-pointer"></i>
                            <Link to="/signup" className="hidden md:block text-navbarLigthBlue hover:underline">Login / Register</Link>
                        </>
                    )}
                    <div className="items-end"></div>
                    <i className="fas fa-search text-gray-700 md:text-navbarLigthBlue cursor-pointer"></i>
                    <i className="fas fa-shopping-cart text-gray-700 md:text-navbarLigthBlue cursor-pointer"></i>
                    <i className="fa-regular fa-heart hidden md:block text-navbarLigthBlue cursor-pointer"></i>
                    <i className={`fas fa-bars text-3xl cursor-pointer md:hidden`} onClick={toggleMenu}></i>
                </div>
            </div>
            {isMenuOpen && (
                <div className="bg-white shadow-md md:hidden">
                    <div className="flex flex-col items-center">
                        <ul className="p-4">
                            {menuItems.map((item) => (
                                <li key={item.name} className="py-2">
                                    <Link to={item.to} className="block text-gray-700 hover:text-blue-500" onClick={item.name === 'Shop' ? toggleShopDropdown : undefined}>
                                        {item.name}
                                        {item.name === 'Shop' && (
                                            <i className={`ml-2 fas fa-chevron-${isShopDropDownOpen ? 'up' : 'down'}`}></i>
                                        )}
                                    </Link>
                                    {item.name === 'Shop' && isShopDropDownOpen && (
                                        <div className="bg-white shadow-md mt-2 w-48 rounded-md py-2 text-gray-700">
                                            {dropdownItems.map((dropdown) => (
                                                <div key={dropdown.category}>
                                                    <Link to="#" className="block px-4 py-2 font-semibold hover:bg-gray-100">{dropdown.category}</Link>
                                                    {dropdown.items.map((subItem) => (
                                                        <Link key={subItem.to} to={subItem.to} className="block px-4 py-2 hover:bg-gray-100">{subItem.name}</Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default SecondHeader;
