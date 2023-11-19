import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categoris/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* category section */}
      <Categories />

      <Rooms />
      {/* Room  section */}
    </div>
  );
};

export default Home;
