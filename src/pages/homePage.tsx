import { BannerLayer, ParallaxBanner, useParallax } from "react-scroll-parallax";
import { AuroraBackground } from "../components/ui/aurora-background";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import profile from '../../src/assets/profile.jpeg'
import { Spotlight } from "../components/ui/Spotlight";
import { motion } from "framer-motion";
import Projects from "./projects";
import ScrollAnimation from 'react-animate-on-scroll';
import Card from "../components/Card/card";
import { Skills } from "./skills";




const TextOverlay = () => {
    const words = [
        {
            text: "Build",
            className: "text-white"
        },
        {
            text: "amazing",
            className: "text-white"
        },
        {
            text: "webapps",
            className: "text-white"
        },
        {
            text: "with",
            className: "text-white"
        },
        {
            text: "Me.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    const headline: BannerLayer = {
        translateY: [0, 50],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="z-[30] h-full flex flex-col justify-center">
                <p className="text-5xl text-white poppins-thin">Hello I'm</p>
                <p className="text-white danfo text-[10rem]">ANUGRAH BHATT</p>
                <TypewriterEffect words={words} />
            </div>
        ),
    };

    const parallax = useParallax({
        easing: 'easeOutQuad',
        translateX: [-50, 0],
    });

    return(
        <>  
            <div className="z-[20] h-full">
                <div className="text-center w-4/5 mx-auto relative  h-[100%]">
                    <ParallaxBanner
                        className="h-full " 
                        layers={[headline]}
                    />
                    {/* </ParallaxBanner> */}
                </div>
            </div>
            <div className="bg-black  text-white !h-screen z-[20] py-10">
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >
                        <div className="grid grid-cols-4 w-4/5 mx-auto justify-center" id="about_section">
                            <div className="about-me col-span-2 self-center">
                                <p className="text-6xl text-center danfo uppercase text-white">
                                    About Me
                                </p>
                                <p className="mt-5 text-white text-2xl leading-loose" ref={parallax.ref}>
                                    Hello Everyone!
                                    Well, I am a software Engineer, working for about 3 years now, mainly working as a fullstack developer
                                    I completed my graduation from Dr APJ Abdul Kalam Technical University in 2020, since then I've been working full time.
                                    I initially started as a frontend developer creating responsive and sleek UI's which I really liked, since I feel I love to create things, which
                                    bring my imagination into play as well. I started to fall in love with backend as well since last year, and I dipped my toes into Node js which gave
                                    me more strength to create full fledged web applications all by myself.
                                    Apart from the technical stuff, I am a huge football fanatic, I love to play football and am a huge Real Madrid fan! I love to watch movies in my free time as well.
                                </p>
                            </div>
                            <div className="col-span-2">
                                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                                    <img src={profile} className=" rounded-xl  mx-auto" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </motion.div>
                </AuroraBackground>
            </div>
            <div className="bg-black text-white h-screen z-[20]  py-10">
                <Projects />
                <Skills />
            </div>
        </>
    )
}

const HomePage = () => {
    return (
        // <div>
        //     <BackgroundBeams className="bg-black z-[10] h-full" 
        //         // children={<TextOverlay />} 
        //     />
        //     <TextOverlay />
        // </div>
        <TextOverlay />
    );
};

export default HomePage;
