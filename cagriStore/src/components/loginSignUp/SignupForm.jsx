import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const Tooltip = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTooltip = () => {
    setIsOpen(!isOpen);
  };

  return (
    <span className="relative cursor-pointer">
      <span className="text-blue-500 pl-2" onClick={toggleTooltip}>
        ?
      </span>
      {isOpen && (
        <span className="absolute top-full left-0 w-48 p-2 text-sm text-white bg-gray-700 rounded opacity-100 transition-opacity duration-300 z-10">
          {message}
        </span>
      )}
    </span>
  );
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const selectedRole = watch("role_id", "customer");

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        console.log("Roles fetched from backend:", response.data);
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
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

      if (data.role_id === "store") {
        formattedData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }

      const response = await axiosInstance.post("/signup", formattedData);
      console.log("Signup successful, response:", response.data);
      toast.success(
        "You need to click link in email to activate your account!"
      );
      history.push("/previous-page");
    } catch (error) {
      if (error.response) {
        if (
          error.response.status === 500 &&
          error.response.data.err.errno === 19
        ) {
          setError("email", {
            type: "manual",
            message: "This email is already registered",
          });
          toast.error("This email is already registered");
        } else {
          toast.error(
            "An error occurred during signup. Please try again later."
          );
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
    return (
      regex.test(value) ||
      "Password must be at least 8 characters long, including numbers, lower case, upper case and special characters"
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4">
      <label className="mb-2">
        Name:
        <Tooltip message="Name must be at least 3 characters" />
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          className="block w-full border rounded px-2 py-1 mt-1"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </label>
      <label className="mb-2">
        Email:
        <Tooltip message="Email must be a valid email address" />
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          className="block w-full border rounded px-2 py-1 mt-1"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </label>
      <label className="mb-2">
        Password:
        <Tooltip message="Password must be at least 8 characters long, including numbers, lower case, upper case, and special characters" />
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            validate: validatePassword,
          })}
          className="block w-full border rounded px-2 py-1 mt-1"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </label>
      <label className="mb-2">
        Confirm Password:
        <Tooltip message="Confirm password must match the password" />
        <input
          type="password"
          {...register("confirm_password", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          className="block w-full border rounded px-2 py-1 mt-1"
        />
        {errors.confirm_password && (
          <p className="text-red-500">{errors.confirm_password.message}</p>
        )}
      </label>
      <label className="mb-2">
        Role:
        <Tooltip message="Select a role from the list" />
        <select
          {...register("role_id", { required: "Role is required" })}
          className="block w-full border rounded px-2 py-1 mt-1"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.code}>
              {role.name}
            </option>
          ))}
        </select>
        {errors.role_id && (
          <p className="text-red-500">{errors.role_id.message}</p>
        )}
      </label>

      {selectedRole === "store" && (
        <>
          <label className="mb-2">
            Store Name:
            <Tooltip message="Store name must be at least 3 characters" />
            <input
              type="text"
              {...register("store_name", {
                required: "Store name is required",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters",
                },
              })}
              className="block w-full border rounded px-2 py-1 mt-1"
            />
            {errors.store_name && (
              <p className="text-red-500">{errors.store_name.message}</p>
            )}
          </label>
          <label className="mb-2">
            Store Phone:
            <Tooltip message="Store phone must be a valid 10-digit Türkiye phone number" />
            <input
              type="tel"
              {...register("store_phone", {
                required: "Store phone is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Invalid Türkiye phone number",
                },
              })}
              className="block w-full border rounded px-2 py-1 mt-1"
            />
            {errors.store_phone && (
              <p className="text-red-500">{errors.store_phone.message}</p>
            )}
          </label>
          <label className="mb-2">
            Store Tax ID:
            <Tooltip message="Store tax ID must be in the format TxxxxVxxxxxx" />
            <input
              type="text"
              {...register("store_tax_no", {
                required: "Store tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Invalid tax ID format",
                },
              })}
              className="block w-full border rounded px-2 py-1 mt-1"
            />
            {errors.store_tax_no && (
              <p className="text-red-500">{errors.store_tax_no.message}</p>
            )}
          </label>
          <label className="mb-2">
            Store Bank Account:
            <Tooltip message="Store bank account must follow the IBAN (International Bank Account Number) format. It starts with two uppercase letters representing the country code, followed by two digits for a checksum. The rest can contain up to 30 characters consisting of uppercase letters and digits. The maximum length of IBAN is 34 characters." />
            <input
              type="text"
              {...register("store_bank_account", {
                required: "Store bank account is required",
                pattern: {
                  value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                  message: "Invalid IBAN address",
                },
                maxLength: {
                  value: 34,
                  message: "IBAN must be at most 34 characters long",
                },
              })}
              className="block w-full border rounded px-2 py-1 mt-1"
            />
            {errors.store_bank_account && (
              <p className="text-red-500">
                {errors.store_bank_account.message}
              </p>
            )}
          </label>
        </>
      )}

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
