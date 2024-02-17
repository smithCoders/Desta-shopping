import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link ,useNavigate} from 'react-router-dom';
import { useMutation } from '@tanstack/react-query'; 
import axios from 'axios';
const signupUser = async (data) => {
  try {
    const response = await axios.post("/api/v1/user/signup", data);
    // Check if the response status code is in the 200 range
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      toast.success(responseData.message);
      return responseData; // Return the response data
    } else {
      // Handle non-successful response status codes
      toast.error("Failed to sign up");
      return null; 
    }
  } catch (error) {
    // Handle errors that occurred during the request
    console.error("Error during signup:", error);
    toast.error("Unexpected error occurred during signup");
    throw error; // Rethrow the error if you want to handle it elsewhere
  }
};

const Signup = () => {
    const [avatar, setAvatar] = useState(null);
    const navigate=useNavigate()

    const { mutate,isLoading } = useMutation(
        {
            mutationFn: signupUser,
            mutationKey:"signup",
            onSuccess: () => {reset(),navigate("/") },
            onError: (err) => console.log("error",err)
        }
    )
      const validationSchema = yup.object().shape({
        name: yup.string().required('Please enter your full name'),
        email: yup.string().email('Invalid email address').required('Please provide your email address'),
        password: yup.string().required('Password is required')
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleFileChange = (e) => {
        setAvatar(e.target.files[0]);
    };

    const onSubmit = async (data) => {
     
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('photo', avatar);
            mutate(data,{onSuccess:()=>{reset()}})
        } catch (error) {
            console.error("Error during signup", error);
            toast.error("Unexpected error, please try again later");
        }
     
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-10 md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an account</h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register('name')}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Full Name"
                                    disabled={isLoading}
                                />
                                {errors.name && <p className="text-red-500 font-semibold">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                    placeholder="Your Email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                    placeholder="Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                {errors.password && <p className="text-red-500 font-semibold">{errors.password.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
                                <div className="mt-2 flex items-center">
                                    <input 
                                        type="file" 
                                        name="avatar" 
                                        id="avatar" 
                                        accept=".jpg,.jpeg,.png" 
                                        onChange={handleFileChange}
                                        className="sr-only" 
                                    />
                                    <label htmlFor="avatar" className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <span className="cursor-pointer">Upload Image</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing up...' : 'Sign up'}
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Signup;
