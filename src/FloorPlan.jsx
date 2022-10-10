import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";

const FloorPlan = (props) => {
  return ( 
    <div>
      <Bedroom bedNum={1} />
      <Kitchen />
    </div>
  );
}

export default FloorPlan;