import './contact.scss'
import { motion } from 'framer-motion'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>gianf2605@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Piazza Istria, Roma</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+39 338 283 5594</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form action="">
                <input type="text" required placeholder='Name' />
                <input type="email" required placeholder='Email' />
                <textarea placeholder='Message' rows={8}></textarea>
                <button>Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact