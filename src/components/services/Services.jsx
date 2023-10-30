import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import './services.scss'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"})

    return (
        <motion.div 
            className='services' 
            variants={variants} 
            initial="initial" 
            // animate="animate" 
            // whileInView="animate"
            ref={ref}
            animate={isInView && "animate"}
            >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="people" />
                    <h1><motion.b whileHover={{color: "#00c4d3"}}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color: "#00c4d3"}}>For Your</motion.b> Busines</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel iaculis neque. Suspendisse potenti. Nulla accumsan sapien arcu, ut molestie quam lobortis sit amet. Morbi eget pretium nunc, ut scelerisque est. Suspendisse efficitur libero id lacus mattis rhoncus. Mauris luctus nunc enim, ac ullamcorper quam convallis sed. Morbi non mattis lacus.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel iaculis neque. Suspendisse potenti. Nulla accumsan sapien arcu, ut molestie quam lobortis sit amet. Morbi eget pretium nunc, ut scelerisque est. Suspendisse efficitur libero id lacus mattis rhoncus. Mauris luctus nunc enim, ac ullamcorper quam convallis sed. Morbi non mattis lacus.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel iaculis neque. Suspendisse potenti. Nulla accumsan sapien arcu, ut molestie quam lobortis sit amet. Morbi eget pretium nunc, ut scelerisque est. Suspendisse efficitur libero id lacus mattis rhoncus. Mauris luctus nunc enim, ac ullamcorper quam convallis sed. Morbi non mattis lacus.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "white", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel iaculis neque. Suspendisse potenti. Nulla accumsan sapien arcu, ut molestie quam lobortis sit amet. Morbi eget pretium nunc, ut scelerisque est. Suspendisse efficitur libero id lacus mattis rhoncus. Mauris luctus nunc enim, ac ullamcorper quam convallis sed. Morbi non mattis lacus.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services