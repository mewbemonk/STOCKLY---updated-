import Framer from "./Framer.jsx"
import Updates from "./Updates.jsx"
import Overview from "./Widgets/Overview.jsx"
import Stock from "./Widgets/Stock.jsx"

const Dashboard = ()=>{
    return(
        <>
        <Framer>
        <Overview />
        </Framer>
        <Framer>
        <Stock />
        </Framer>
        <Framer>
        <Updates />
        </Framer>
        
        </>
    )
}

export default Dashboard