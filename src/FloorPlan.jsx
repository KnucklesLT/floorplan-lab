import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";

const FloorPlan = (props) => {
  return ( 
    <div>
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size="Full"/>
      <Bedroom bedNum={2} />
      <Bath size = "Half" />
      <Bedroom bedNum={3} />
    </div>
  );
}

export default FloorPlan;