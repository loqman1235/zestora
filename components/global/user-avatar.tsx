"use client";

import { signOutAction } from "@/actions/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LayoutDashboard, LogOutIcon, ShoppingCartIcon } from "lucide-react";
import { User } from "next-auth";
import Link from "next/link";

type Props = {
  user: User;
  className?: string;
};

export const UserAvatar = ({ user, className }: Props) => {
  const initials = user.name ? user.name.slice(0, 1).toUpperCase() : "U";
  return (
    // Dropown menu
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className={cn("size-8 cursor-pointer", className)}>
          <AvatarFallback className="bg-[#5B6BC0] text-white">
            {initials}
          </AvatarFallback>
          <AvatarImage src={user.image || ""} alt={user.name || "Avatar"} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span className="font-semibold">{user.name || "User"}</span>
          <span className="text-muted-foreground text-xs">
            {user.email || "No email"}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user.role === "ADMIN" && (
          <DropdownMenuItem>
            <Link className="flex items-center gap-2" href="/dashboard">
              <LayoutDashboard className="mr-2 size-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <Link className="flex items-center gap-2" href="/dashboard">
            <ShoppingCartIcon className="mr-2 size-4" />
            Cart
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={signOutAction}
          className="!text-destructive !hover:bg-destructive/10 cursor-pointer"
        >
          <LogOutIcon className="text-destructive mr-2 size-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
