import { Outlet } from "react-router-dom";

function Account() {
  return (
    <main className="mt-8 overflow-hidden rounded-xl">
      <Outlet />
    </main>
  );
}

export default Account;
