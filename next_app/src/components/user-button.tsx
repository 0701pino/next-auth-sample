import { auth, signIn, signOut } from "@/lib/auth";

export default async function UserButton() {
  const session = await auth();
  return (
    <>
      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("GitHub");
          }}
        >
          <button className="my-5 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Sign in with GitHub
          </button>
        </form>
      )}
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="my-5 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Sign out
          </button>
        </form>
      )}
    </>
  );
}
