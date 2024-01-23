import { createContext, useEffect, useState } from "react";

export const NavbarContext=createContext();


const NavbarProvider =({children})=>{

    const[mobilMenu, setMobilMenu]=useState(false);
    const [isVisible, setIsVisible] = useState(true);


    const mobilMenuDegistir=()=>{
        setMobilMenu(!mobilMenu);
    }


    
      useEffect(() => {
        // Kullanıcının sayfayı aşağı kaydırma işlemi algılandığında butonun görünürlüğünü kontrol eder
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <NavbarContext.Provider value={{mobilMenu,setMobilMenu,mobilMenuDegistir,isVisible,setIsVisible}}>
{children}
        </NavbarContext.Provider>
    )
}

export default NavbarProvider
