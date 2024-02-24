import { Session } from "next-auth";

import { auth } from "@/lib/auth";

export default async function ServerComponent() {
  console.log("server component");
  const session: Session | null = await auth();

  return (
    <>
      <div className="text-xl"> server component</div>
      {session ? <div>user: {session.user?.name || "Guest"}</div> : <div>user: not signed in</div>}
    </>
  );
}
