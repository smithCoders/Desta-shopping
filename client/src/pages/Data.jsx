import {useQuery} from "@tanstack/react-query"
import axios from 'axios';
  import toast  from "react-hot-toast"
  // Fetch data function
const signupUser = async () => {
  try {
    const response = await axios.get("/api/v1/users/");
    // Check if the response status code is in the 200 range
    if (response.status >= 200 && response.status < 300) {
      // Return the response data directly
      return response.data;
    } else {
      // Handle non-successful response status codes
      toast.error("Failed to fetch data");
      return null; // Or throw an error if you want to handle it in a catch block
    }
  } catch (error) {
    // Handle errors that occurred during the request
    console.error("Error fetching data:", error);
    toast.error("Unexpected error occurred while fetching data");
    throw error; // Rethrow the error if you want to handle it elsewhere
  }
};

function Data() {
    const x=useQuery({queryKey:["user"],queryFn:signupUser})
    console.log(x)
    return (
        <div>
          queryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy  
        </div>
    )
}

export default Data
