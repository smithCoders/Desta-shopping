import {Link}  from "react-router-dom"
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from "/logo-colored.png";
import  google from "/type=Google Play.png"
import  appStore  from "/type=Appstore.png"
function FooterComp() {
  return (
    <Footer container className="grid w-full h-[190px] grid-cols-5 gap-8  px-[48px]" >
     
      
          <div className='flex flex-col gap-4'> 
            <FooterBrand
              href="/"
              src={logo}
              alt="Desta shopping."
             
            />
            <p className="text-base text-gray-600"> 
            <span className="block">Best information about the company gies</span> 
             <span>here but now lorem ipsum is</span></p>
           
               <div className=" flex   items-center  gap-4">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
          
          </div>
            <p className="text-sm text-gray-600">&copy;{new Date().getFullYear()} All right reserved. Desta shoppings</p>
          </div>
        
            <div className='flex flex-col justify-center gap-1'>
              <FooterTitle title="About" className="mt-4" />
              <FooterLinkGroup col>
                <FooterLink href="#">About us</FooterLink>
                <FooterLink href="#">Find store</FooterLink>
                <FooterLink href="#">Categories</FooterLink>
                <FooterLink href="#">Blogs</FooterLink>
              </FooterLinkGroup>
            </div>
            <div className='flex flex-col gap-4'>
              <FooterTitle title="For Users" className="mt-4" />
              <FooterLinkGroup col>
                <FooterLink href="#">Login</FooterLink>
                <FooterLink href="#">Register</FooterLink>
                <FooterLink href="#">setting</FooterLink>
                <FooterLink href="#">My Orders</FooterLink>
                
              </FooterLinkGroup>
            </div>
            <div className='flex justify-center flex-col gap-4'>
              <FooterTitle title="Information" className="mt-4" />
              <FooterLinkGroup col>
                <FooterLink href="#">Help center</FooterLink>
                <FooterLink href="#">Money Refund</FooterLink>
                <FooterLink href="#">shopping</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
            <div className="flex  justify-center flex-col gap-2">
              <FooterTitle title="Apps" className="mt-4" />
              <div className="flex flex-col gap-4">
                 <Link to={""}>
                <img src={google} className="w-[100px]"/>
              </Link>
              <Link to={""}>
                <img src={appStore} className="w-[100px]"/>
              </Link>
              </div>
             
            </div>
         
     
      
       
       
   
    </Footer>
  );
}

export default FooterComp