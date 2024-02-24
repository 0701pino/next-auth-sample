"use client";

import { useEffect, useState } from "react";

import { Session } from "next-auth";

export default function ClientComponent() {
  console.log("client component");
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    async function fetchSession() {
      const res = await fetch("/api/auth/session");

      const sessionData = await res.json();
      console.log("sessionData", sessionData);
      setSession(sessionData);
    }

    fetchSession();
  }, []);

  return (
    <div className="mt-5">
      <div className="text-xl"> client component</div>
      {session ? <div>user: {session.user?.name || "Guest"}</div> : <div>user: not signed in</div>}
    </div>
  );
}
