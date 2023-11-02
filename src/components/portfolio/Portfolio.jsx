
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

import './portfolio.scss'
import { useRef } from 'react'

const items = [
    {
        id: 1,
        title: "Monkey Scrubs",
        img: "./monkeyscrubs.png",
        desc: "Piataforma e-commerce che permette a gli usuari di cercare, comprare vestimenti medici e non solo. La piattaforma offre un'esperienza di acquisto online facile e intuitiva, con funzionalità come la ricerca avanzata e molto altre(in fase sviluppo)"
    },
    {
        id: 1,
        title: "BTM Machines",
        img: "./btmmachines.png",
        desc: "Abbiamo creato una pagina da zero su WordPress, sviluppando un tema personalizzato e integrando API per la ricerca interattiva sulla mappa. Ora puoi trovare facilmente gli ATM Bitcoin Machines più vicini grazie al nostro lavoro di sviluppo dedicato."
    },
    {
        id: 1,
        title: "Personal Portfolio",
        img: "./portfolio.png",
        desc: "Applicazione web personale realizzata con React, utilizzando le diverse funzionalità offerte dal framework, chiamate hooks. Si tratta di un progetto innovativo e all'avanguardia che ti permetterà di sfruttare appieno le potenzialità di questa tecnologia per lo sviluppo web."
    },

]

const Single = ({ item }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target: ref, });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="works" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Live Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )

}

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target: ref, offset:['end end', 'start start']});

    const scaleX= useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Feature Works</h1>
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio