import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from '../../store/api/axiosInstance';
import { login } from '../../store/thunks/clientThunks';
import { setUser } from '../../store/actions/clientActions';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();  

  const onSubmit = async (data) => {
    const { email, password, rememberMe } = data;
  
    try {
      const user = await dispatch(login(email, password, rememberMe));
  
      if (rememberMe) {
        localStorage.setItem('token', user.token);
      }

    
      history.push('/'); 
    } catch (error) {
      console.log(error);
      toast.error('Login failed. Please check your credentials.');
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              {...register('password', { required: true })}
            />
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              {...register('rememberMe')}
            />
            <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginForm;
