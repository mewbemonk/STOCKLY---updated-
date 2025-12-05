import {motion} from 'framer-motion'

const Framer = ({children})=>{
    return(
        <>
        <motion.div
        variants={{
            hidden:{opacity:0,y:20},
            visible:{opacity:1,y:0}
        }} 
        initial="hidden"
        whileInView="visible"
        viewport={{once:false,amount:0.3}}
        transition={{duration:0.8,delay:0.5,ease:"easeOut"}}
        >
            {children}
        </motion.div>
        </>
    )
}
export default Framer