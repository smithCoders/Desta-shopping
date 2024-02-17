import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import{useMutation} from "@tanstack/react-query";
import * as yup from 'yup';





function Login() {
    const [visible, setVisible] = useState(false);
    const navigate=useNavigate();
   const login = async (data) => {
    try {
        const response = await axios.post("/api/v1/user/login", data);
        if (response.status === 200) {
            // Login successful
            toast.success(response.data.message);
            navigate("/");

            // Redirect or perform any necessary actions upon successful login
            return response.data;
        } else {
            // Login failed
            const errorMessage = response.data.message || "An unexpected error occurred.";

            toast.error(errorMessage);
        }
    } catch (err) {
     
        console.log("Error while login", err);

        toast.error("An unexpected error occurred. Please try again.");
    }
}

    const{mutateAsync,isLoading}=useMutation({
        mutationFn:login,
        mutationKey:"login",
        onSuccess:()=>{reset()},
        onError:(err)=>{console.log("error uring login",err)}
    });

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Please provide your email address'),
        password: yup.string().required('Password is required')
    });

    const { register,reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

function onSubmit(data){
    mutateAsync(data);
   
}

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    EXpress shop
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="abebe@gmail.com"
                                />
                                {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div className="relative">
                                    <input
                                        type={visible ? 'text' : 'password'}
                                        id="password"
                                        {...register('password')}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setVisible((show) => !show)}
                                    >
                                        {visible ? (
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 1.414l-1.17 1.17a4 4 0 105.657 5.657l1.17-1.17a1 1 0 111.414 1.414l-1.17 1.17A6 6 0 116.293 7.293z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && <p className="text-red-500 font-semibold">{errors.password.message}</p>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-700 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;



