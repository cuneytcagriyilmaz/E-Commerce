// form should be created to sign up a new user

// Page URL should be /signup

// First you need to create and Axios instance with baseURL: https://workintech-fe-ecommerce.onrender.com

// You need to use react-hook-form library

// Name: name field is required with min 3 char validation

// Email: email needs to be validated

// Password: password needs to be min 8 character including numbers, lower case, upper case and special chars

// Password Validation: password needs to be matched to second pass input field

// Role: role_id field should be listed in selection box and data needs to be fetched by GET request to endpoint: /roles

// Customer should be selected by default
// Selected role id should be assigned to role_id key in form data
// If store option is selected as a role,

// Store Name name field should be appear at least 3 char
// Store Phone phone field should be valid Türkiye phone number
// Store Tax ID tax_no field should be appear and it should match the pattern “TXXXXVXXXXXX” ⇒ X can be any number
// Store Bank Account bank_account field should be valid IBAN address
// on Submit it should create a POST request to endpoint /signup with form data

// While submitting, there should be a spinner in the Submit button and it should be disabled
// if submit is successful, it should redirect client to previous page with warning: “You need to click link in email to activate your account!”
// if submit is not successful, client should be informed about the error staying in the form page
// Data Format

// Customer & Admin: { name, email, password, role_id }
// Store: { name, email, password, role_id, store: { name, phone, tax_no, bank_account  } }


import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

const SignupForm = () => {
  const { register, handleSubmit, watch, formState: { errors }, setError, clearErrors, setValue } = useForm();
  const [roles, setRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const selectedRole = watch('role_id', 'Customer');

  useEffect(() => {
    axiosInstance.get('/roles')
      .then(response => {
        console.log('Roles fetched from backend:', response.data);
        setRoles(response.data);
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
      });
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formattedData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };

      if (data.role_id === 'store') {
        formattedData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }

      const response = await axiosInstance.post('/signup', formattedData);
      console.log('Signup successful, response:', response.data);
      toast.success("You need to click link in email to activate your account!");
      history.push('/previous-page');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500 && error.response.data.err.errno === 19) {
          setError('email', { type: 'manual', message: 'This email is already registered' });
          toast.error('This email is already registered');
        } else {
          toast.error("An error occurred during signup. Please try again later.");
        }
      } else {
        toast.error("An error occurred during signup. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(value) || 'Password must be at least 8 characters long, including numbers, lower case, upper case and special characters';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4">
      <label className="mb-2">
        Name:
        <input
          type="text"
          {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Name must be at least 3 characters' } })}
          className="block w-full border rounded px-2 py-1 mt-1"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </label>
      <label className="mb-2">
        Email:
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
          })}
          className="block w-full border rounded px-2 py-1 mt-1"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </label>
      <label className="mb-2">
        Password:
        <input
          type="password"
          {...register('password', { required: 'Password is required', validate: validatePassword })}
          className="block w-full border rounded px-2 py-1 mt-1"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </label>
      <label className="mb-2">
        Confirm Password:
        <input
          type="password"
          {...register('confirm_password', {
            required: 'Please confirm your password',
            validate: value => value === watch('password') || 'Passwords do not match',
          })}
          className="block w-full border rounded px-2 py-1 mt-1"
        />
        {errors.confirm_password && <p className="text-red-500">{errors.confirm_password.message}</p>}
      </label>
      <label className="mb-2">
        Role:
        <select
          {...register('role_id', { required: 'Role is required' })}
          className="block w-full border rounded px-2 py-1 mt-1"
        >
          {roles.map(role => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
        {errors.role_id && <p className="text-red-500">{errors.role_id.message}</p>}
      </label>

      {selectedRole === 'store' && (
        <>
          <label className="mb-2">
            Store Name:
            <input
              type="text"
              {...register('store_name', { required: 'Store name is required', minLength: { value: 3, message: 'Store name must be at least 3 characters' } })}
              className="block w-full border rounded px-2 py-1 mt-1"
            />
            {errors.store_name && <p className="text-red-500">{errors.store_name.message}</p>}
          </label>
          <label className="mb-2">
            Store Phone:
            <input
              type="tel"
              {...register('store_phone', { required: 'Store phone is required', pattern: { value: /^\d{10}$/, message: 'Invalid Türkiye phone number' } })}
              className="block w-full border rounded px-2 py-1 mt-1"
            />
            {errors.store_phone && <p className="text-red-500">{errors.store_phone.message}</p>}
          </label>
          <label className="mb-2">
            Store Tax ID:
            <input
              type="text"
              {...register('store_tax_no', { required: 'Store tax ID is required', pattern: { value: /^T\d{4}V\d{6}$/, message: 'Invalid tax ID format' } })}
              className="block w-full border rounded px-2 py-1 mt-1"
            />
            {errors.store_tax_no && <p className="text-red-500">{errors.store_tax_no.message}</p>}
          </label>
          <label className="mb-2">
            Store Bank Account:
            <input
              type="text"
              {...register('store_bank_account', { required: 'Store bank account is required', pattern: { value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/, message: 'Invalid IBAN address' } })}
              className="block w-full border rounded px-2 py-1 mt-1"
            />
            {errors.store_bank_account && <p className="text-red-500">{errors.store_bank_account.message}</p>}
          </label>
        </>
      )}

      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-400" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default SignupForm;
