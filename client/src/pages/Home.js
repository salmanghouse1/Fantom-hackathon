import React from 'react';
// import '.././App.css';
// import Lottie from 'react-lottie';
// import Particles from 'react-particles-js';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Hero from "../assets/crypto-center.gif";

function Home() {
    
      const particlesInit = useCallback(async engine => {
                console.log(engine);
                // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
                // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
                // starting from v2 you can add only the features you need reducing the bundle size
                await loadFull(engine);
            }, []);
            
            const particlesLoaded = useCallback(async container => {
                await console.log(container);
            }, []);


    return ( 
        <div>


 <div style={{display:"flex",position:"absolute",width:"100%",height:"100%",background:"#282c34"}}>
        <div style={{zIndex:9,width:"300px",padding:"150px"}}>
        <img src={Hero} style={{width:"100%",postion:"relative"}}/>
            
        </div>
    
        <div style={{padding:"150px"}}>
        <div style={{flexDirection:"column"}}>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            width="399px"
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: "#282c34",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: false,
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 6, max: 9 },
                    },
                },
                detectRetina: true,
            }}
            />
            
            <h1>Fantom The Fastest There is!</h1>
            </div>
        
        </div>
        
                </div>
</div>
        
        
     );
}

export default Home;