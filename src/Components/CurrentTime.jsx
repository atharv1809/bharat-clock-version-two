import { useEffect, useState } from "react";
function CurrentTime()
{
    const [timer,setTimer]=useState(new Date());
    useEffect(()=>{
        const intervalId=setInterval(()=>setTimer(new Date),1000);
        return ()=>{clearInterval(intervalId);}
    },[])
    let time=new Date();
    return <p className="lead">This is the Current time: {time.toLocaleDateString()}, {time.toLocaleTimeString()}</p>;
}
export default CurrentTime;