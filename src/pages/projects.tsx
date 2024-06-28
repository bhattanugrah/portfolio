// import { Link } from "react-router-dom"
// import { MacbookScroll } from "../components/ui/macbook-scroll"
// import { Badge } from "../components/badge/badge"
import hrms from '../../src/assets/hrms.png'
// import { useParallax } from "react-scroll-parallax"
import {motion} from 'framer-motion'




const Projects = () => {

    // const firstParallax = useParallax({
    //     easing: "easeInOut",
    //     translateX:['-30%', '0%'],
    // })

    // const secondParallax = useParallax({
    //     easing: 'easeInOut',
    //     translateX: ['100%', '-80%']
    // })

    return(
        <div className="z-20 bg-black w-full overflow-hidden">
            <div className='md:w-4/5 mx-auto'>
                <p className="text-white text-center text-6xl">Projects</p>
                <div className="first-project mt-20 h-screen">
                    <div className="grid grid-cols-2 self-center gap-7">
                        <motion.div 
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '0%' }}
                            transition={{
                                delay: 0.2,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="col-span-1 self-center"
                        >
                            <img src={hrms} className='self-center' />
                        </motion.div>
                        <div className="col-span-1">
                            <p className='text-center text-5xl'>Project 1</p>
                            <p className='mt-10 poppins-light text-xl leading-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis voluptatem accusamus sunt aut sapiente nemo in laudantium asperiores quisquam. Sint temporibus voluptas nobis, esse iusto, ipsam facere soluta quis impedit blanditiis nam dolores aliquam, aspernatur voluptatum dolore. Fugit, consequuntur, repellat id quos unde soluta molestiae quae autem cumque ratione assumenda modi quas, perspiciatis corrupti velit quia. Velit alias eum temporibus consequuntur magnam, sequi vel quo recusandae fugiat repudiandae repellendus!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='second-project mt-20 h-screen'>
                    <div className='grid grid-cols-2 gap-7'>
                        <div className="col-span-1">
                            <p className='text-center text-5xl'>Project 2</p>
                            <p className='mt-10 poppins-light text-xl leading-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis voluptatem accusamus sunt aut sapiente nemo in laudantium asperiores quisquam. Sint temporibus voluptas nobis, esse iusto, ipsam facere soluta quis impedit blanditiis nam dolores aliquam, aspernatur voluptatum dolore. Fugit, consequuntur, repellat id quos unde soluta molestiae quae autem cumque ratione assumenda modi quas, perspiciatis corrupti velit quia. Velit alias eum temporibus consequuntur magnam, sequi vel quo recusandae fugiat repudiandae repellendus!
                            </p>
                        </div>
                        <div className='col-span-1 self-center'>
                            <motion.div
                                initial={{x: '100%'}}
                                whileInView={{x: '0%'}}
                                transition={{
                                    delay: 0.2,
                                    duration: 1,
                                    ease:"easeInOut"
                                }}
                            >
                                <img src={hrms} className='self-center' />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='third-project mt-20 h-screen'>
                    <div className='grid grid-cols-2 gap-7'>
                        <div className='col-span-1 self-center'>
                            <motion.div
                                initial={{x: '-100%'}}
                                whileInView={{x: '0%'}}
                                transition={{
                                    delay: 0.2,
                                    duration: 1,
                                    ease:"easeInOut"
                                }}
                            >
                                <img src={hrms} className='self-center' />
                            </motion.div>
                        </div>
                        <div className="col-span-1">
                            <p className='text-center text-5xl'>Project 3</p>
                            <p className='mt-10 poppins-light text-xl leading-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis voluptatem accusamus sunt aut sapiente nemo in laudantium asperiores quisquam. Sint temporibus voluptas nobis, esse iusto, ipsam facere soluta quis impedit blanditiis nam dolores aliquam, aspernatur voluptatum dolore. Fugit, consequuntur, repellat id quos unde soluta molestiae quae autem cumque ratione assumenda modi quas, perspiciatis corrupti velit quia. Velit alias eum temporibus consequuntur magnam, sequi vel quo recusandae fugiat repudiandae repellendus!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;