import { FaBellSlash, FaBell, FaQuestionCircle } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <nav className="flexBetween navbar">
      <input
        placeholder="Search"
        className="p-2 rounded-lg bg-gray-100 block w-full border-0 hover:boder-0"
      />

      <div className="flexCenter gap-4">
        <div className="flex items-center gap-1">
          <FaBellSlash /> <p>feedback!</p>
        </div>
        <div>
          <FaBell />
        </div>
        <div>
          <FaQuestionCircle />
        </div>
        <div>profile</div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
