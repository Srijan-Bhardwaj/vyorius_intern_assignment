import React from 'react';
import Style from './LandingPage.module.css';
import image from './drone_images.png';

const LandingPage=()=>{
    return(
        <>  
            <div className={Style.container}>
                <div className={Style.left}>
                    <p className={Style.section1}>CONNECTING THE DISCONNECTED</p>
                    <p className={Style.section2}><span style={{color:"#ff914D"}}>Vyorius</span> brings unmanned </p>
                    <p className={Style.section2}>robots <span style={{color:"#ff914D"}}>together</span>,</p>
                    <p className={Style.section2}>wherever they are</p>
                    <p className={Style.section3}>With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re operating.</p>
                    <div className={Style.btns}>
                        <div className={Style.btn1}>Try Vyorius</div>
                        <div className={Style.btn2}>Learn More</div>
                    </div>
                    <p className={Style.section4}></p>
                </div>
                <div className={Style.right}><img src={image} className={Style.image}/></div>
            </div>
        </>
    );
}

export default LandingPage;