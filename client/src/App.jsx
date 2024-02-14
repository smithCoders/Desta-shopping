import {BrowserRouter,Routes,Route} from "react-router-dom"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import{Toaster} from "react-hot-toast"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Data from "./pages/Data"

// define aueyclient.
const queryClient= new QueryClient({
defaultOptions:{
  queries:{staleTime:0}
}
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
       <BrowserRouter>
 <Routes>
  <Route index  element={<Data/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="signup" element={<Signup/>}/>
 </Routes>
 </BrowserRouter>

   <Toaster position="top-center"
     gutter={12}
     containerStyle={{margin:"8px"}}
     toastOptions={
      {
        success:{duration:3000},
        error:{duration:5000},
        style:{
          fontSize:"16px",
          maxWidth:"500px",
          padding:"16px 24px",
          backgroundColor:"#f3f3f3f3",
          Color:"#333"
        }
      }


     }
     
     />
    </QueryClientProvider>

  )
}

export default App
