import { NavItems } from "@/constants";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = (name) => {
  return (
    <nav className="max-w-7xl mx-auto bg-blue-900 h-14 flex items-center justify-between list-none px-4 mb-4">
      {NavItems.map((item) => (
        <div key={item.id}>
          <li>
            <Link href={item.link}>{item.name}</Link>
          </li>
        </div>
      ))}
      <Link href={"/add_post"}>
        {" "}
        <CustomButton name="Add New Post" />
      </Link>
    </nav>
  );
};

export default Navbar;
