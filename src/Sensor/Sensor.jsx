import Master from "./Master";
import RoomA from "./RoomA";
import Weather from "./Weather";

function Sensor() {
  return (
    <main className="">
      <Weather />
      <div className="mt-8 flex flex-col gap-8 rounded-lg xl:flex-row">
        <Master />
        <RoomA />
      </div>
    </main>
  );
}

export default Sensor;
