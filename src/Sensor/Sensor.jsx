import Master from "./Master";
import Weather from "./Weather";

function Sensor() {
  return (
    <main className="">
      <Weather />
      <div className="mt-8">
        <Master />
      </div>
    </main>
  );
}

export default Sensor;
