import  { useState } from "react";
export function MouseEventDemo()
{
    const [banner,setBanner]=useState('slide1.jpg');
    function StopMarquee(e){
        e.target.stop();
    }
    function StartMarquee(e){
        e.target.start();
    }
    function SetImage1(){
        setBanner('slide3.jpg');
    }
    function SetImage2(){
        setBanner('slide1.jpg');
    }
    return(
        <div className="container-fluid">
            <header>
                <img onMouseOver={SetImage1} onMouseOut={SetImage2} src={banner} className="w-100 d-block" />
            </header>
            <h2>Mouse Events</h2>
            <marquee scrollAmount="10" onMouseOver={StopMarquee} onMouseOut={StartMarquee}>
                <img src="speaker.jpg" width="100" height="100" />
                <img src="shoe.jpg" width="100" height="100" />
            </marquee>
        </div>
    )
}