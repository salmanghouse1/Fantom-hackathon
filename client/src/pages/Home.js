import React from 'react';
// import '.././App.css';
// import Lottie from 'react-lottie';
// import Particles from 'react-particles-js';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Hero from "../assets/crypto-center.gif";
import ComplexNavbar from "../components/Header";


import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
  } from "@material-tailwind/react";

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
           
            <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Fantom Exchange?
        </Typography>
        <Typography color="gray" className="font-normal">
          So you ask Can you help me out in Finance and Asset Trading? 
          So I have created the fastest, most decentralized Exchange and its using the Fantom Coin! Fantom Coin The Fastest most secure coin out there!
          Lets Trade, Swap and do more on this awesome site, even discuss your trades on the social media app.
        </Typography>
        <Button variant="gradient">Connect Wallet</Button>
      </div>
   
      

 <div style={{display:"flex",flexDirection:"column",position:"absolute",width:"100%",height:"100%",background:"#282c34"}}>
        <div style={{width:"100%"}}>
        <img src={Hero} style={{postion:"relative",margin:"150px auto"}}/>
            
        </div>
    
        <div style={{display: "flex",justifyContent: "center",
    alignItems: "center"}}>
        
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            width="300px"
            height="100px"
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
                            mode:"push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 20,
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
            </div>
            <div>
            <h1 style={{color:"white"}}>Fantom The Fastest There is!</h1>
            <Button variant="gradient">Trade Now</Button>
            
        
        </div>
        
                </div>
</div>
        
        
     );
}

export default Home;