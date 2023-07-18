import SignOutButton from "@components/SignOutButton";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <SignOutButton />
      <div>
        <Link href="">Legal hari Application</Link>
      </div>
      <div>
        <Link href="">Death Birth Application </Link>
      </div>
      <div>Application Status</div>
    </div>
  );
};

export default page;
