"use client";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/dashboard/sidebar";

type Props = {
  user: Session["user"];
};

export function UserInfo({ user }: Props) {
  if (!user) return;
  return (
    <Sidebar>
      <div className="flex flex-col items-center justify-center space-y-4 ">
        <Avatar>
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span>{user.email}</span>

        <Button variant="outline" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    </Sidebar>
  );
}
