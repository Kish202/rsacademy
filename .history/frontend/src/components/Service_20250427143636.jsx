import React from 'react'
import CountUp from "react-countup"
import {useTheme} from "@/context/ThemeContext";
// import { is } from './../../node_modules/detective/node_modules/acorn/acorn/dist/acorn';
const Service =() =>{
 const {theme} = useTheme();
 const isDarkMode = theme === 'dark'
    return (
    <section className="container h-12 md:h-32 ">
     <div className={`grid grid-cols-4 w-full mx-auto -translate-y-12 divde-x divide-blue-700 place-self-center   bg-yellow-700 p-4 shadow-lg ${isDarkMode?bg-violet-800 dark:text-white/70} md:max-w-[800px]  md:p-8`}>
    <div className="flex flex-col items-center justify-center " >



<h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
      <CountUp end={234} suffix="+" duration={2.75}/>

</h1>

<h1 className="sm:text-md  font-bold md:text-lg">
Clients
</h1>




        </div>   

        <div className="flex flex-col items-center justify-center">
  <h1 className="text-sm text-black/80 sm:text-lg md:text-3xl dark:text-white font-bold">
  <CountUp end={57} suffix="+" duratiion={2.75}/>  </h1>  

    <h1 className="sm:text-md font-bold  md:text-lg">
        Projects
        
        </h1>        
            </div>        

    <div className="flex flex-col items-center justify-center" >
     
     
     
        <h1 className=" text-black/80 dark:text-white  sm:text-lg md:text-3xl font-bold">
<CountUp end={234}  suffix="k+" / >
        </h1>
<h1 className="font-bold  sm:text-md text-xs md:text-lg" >
Subscribers
</h1>


            </div>


<div className="flex flex-col items-center justify-center">
<h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
<CountUp start={-875.020}
end={160527.012} duration={2.75} separator="" suffix="+" />
</h1>


<h1 className=" sm:text-md  font-bold md:text-lg ">
Clients
</h1>
</div>
</div> 
    </section>
  )
}

export default Service