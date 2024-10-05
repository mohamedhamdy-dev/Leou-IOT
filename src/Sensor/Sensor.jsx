import { useUser } from "../Context/userProvider";
import Master from "./Master";
import Weather from "./Weather";

function Sensor() {
  const { logged } = useUser();

  if (logged)
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
