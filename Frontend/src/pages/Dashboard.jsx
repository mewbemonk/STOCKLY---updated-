
import Framer from "../Component/Framer.jsx";
import Updates from "../Component/Updates.jsx";
import Overview from "../Component/Overview.jsx";
import Stock from "../Component/Stock.jsx";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
