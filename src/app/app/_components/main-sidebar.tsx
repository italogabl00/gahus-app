"use client";

import {
  DashboardSideBar,
  DashboardSideBarFooter,
  DashboardSideBarHeader,
  DashboardSideBarMain,
  DashboardSideBarNav,
  DashboardSideBarNavHeader,
  DashboardSideBarNavHeaderTitle,
  DashboardSideBarNavLink,
  DashboardSideBarNavMain,
} from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";
import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import { UserDropDown } from "./user-dropdown";
import { Logo } from "@/components/logo";
import { Session } from "next-auth";

type MainSidebarProps = {
  user: Session["user"];
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname == path;
  };




  return (
    <DashboardSideBar>
      <DashboardSideBarHeader>
        <h1></h1>
      </DashboardSideBarHeader>
      <Logo />
      <DashboardSideBarMain className="flex flex-col flex-grow">
        <DashboardSideBarNav>
          <DashboardSideBarNavMain>
            <DashboardSideBarNavLink href="/app" active={isActive("/app")}>
              <HomeIcon className="w-3 h-3 mr-3" />
              Tasks
            </DashboardSideBarNavLink>

            <DashboardSideBarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Settings
            </DashboardSideBarNavLink>
          </DashboardSideBarNavMain>
        </DashboardSideBarNav>

        <DashboardSideBarNav className="mt-auto">
          <DashboardSideBarNavHeader>
            <DashboardSideBarNavHeaderTitle>Links extras</DashboardSideBarNavHeaderTitle>
          </DashboardSideBarNavHeader>
          <DashboardSideBarNavMain>
            <DashboardSideBarNavLink href="/app">Precisa de ajuda ?</DashboardSideBarNavLink>
            <DashboardSideBarNavLink href="/">Site</DashboardSideBarNavLink>
          </DashboardSideBarNavMain>
        </DashboardSideBarNav>
      </DashboardSideBarMain>
      <DashboardSideBarFooter>
        <UserDropDown user={user}/>
      </DashboardSideBarFooter>
    </DashboardSideBar>
  );
}
