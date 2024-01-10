import { UserProfile } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex justify-center items-center my-10">
      <UserProfile/>
    </div>
  );
}
