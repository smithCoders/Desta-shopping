import {BrowserRouter,Routes,Route} from "react-router-dom"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import axios from "axios"
import{Toaster} from "react-hot-toast"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"
import FooterComp from "./components/Footer"
import ListView from "./pages/ListView"
import DetailProduct from "./pages/DetailProduct"
import CartPage from "./pages/CartPage"




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
  
  <Route index  element={<Homepage/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="signup" element={<Signup/>}/>
  <Route path="search-listView" element={<ListView/>}/>
  <Route path="products" element={<DetailProduct/>}/>
  <Route path="cart" element={<CartPage/>}/>

 </Routes>
 {/* <FooterComp/> */}

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
