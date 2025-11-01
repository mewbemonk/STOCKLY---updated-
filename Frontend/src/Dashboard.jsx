import Updates from "./Updates.jsx"
import Overview from "./Widgets/Overview.jsx"
import Stock from "./Widgets/Stock.jsx"

const Dashboard = ()=>{
    return(
        <>
        <Overview />
        <Stock />
        <Updates />
        </>
    )
}

export default Dashboard