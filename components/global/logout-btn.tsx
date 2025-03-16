import { signOutAction } from "@/actions/auth";
import { LogOutIcon } from "lucide-react";

export const LogoutBtn = () => {
  return (
    <form className="flex items-center" action={signOutAction}>
      <button type="submit">
        <LogOutIcon />
      </button>
    </form>
  );
};
