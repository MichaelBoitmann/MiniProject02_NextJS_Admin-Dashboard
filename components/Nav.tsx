import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextAuth]";
import Navbar from "@/components/Navbar";

export default async function Nav() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return <Navbar user={session?.user} />;
}