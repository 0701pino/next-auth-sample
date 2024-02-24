"use client";

import { Session } from "next-auth";

export default function ClientComponent2({ session }: { session: Session | null }) {
  console.log("client component2");

  return (
    <div className="mt-5">
      <div className="text-xl"> client component2</div>
      {session ? <div>user: {session.user?.name || "Guest"}</div> : <div>user: not signed in</div>}
    </div>
  );
}
