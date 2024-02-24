import { Session } from "next-auth";

import ClientComponent from "@/components/client-component";
import ClientComponent2 from "@/components/client-component2";
import ServerComponent from "@/components/server-component";
import { auth } from "@/lib/auth";

const Home = async () => {
  const session: Session | null = await auth();
  return (
    <div className="mx-auto text-center">
      <ServerComponent />
      <ClientComponent />
      <ClientComponent2 session={session} />
    </div>
  );
};

export default Home;
