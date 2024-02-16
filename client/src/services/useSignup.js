import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query'; // Import from 'react-query'

import axios from 'axios';

const signupUser = async (data) => {
    try {
        const response = await axios.post("/api/v1/users/signup", data);
        if (response.status === 200) {
            const responseData = response.data;
            toast.success(responseData.message);
        } else {
            toast.error(response.data.message);
        }
        return response.data;
    } catch (error) {
        toast.error("Unexpected error. Please try again later.");
        console.log("Error during signup", error);
        throw error; // Rethrow the error to let the calling code handle it
    }
};

const useSignupUser = async () => {
    const queryClinet = useQueryClient();
    const { mutate,isLoading } = useMutation(
        {
            mutationFn: signupUser,
            onSuccess: () => { queryClinet.invalidateQueries({ queryKey: ["user"] }) },
            onError: (err) => toast.error(err.message)
        }
    )
    return {  mutate,isLoading }
}


export default {useSignupUser,signupUser};
