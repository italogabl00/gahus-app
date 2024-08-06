"use client";

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarNavLink,
  SidebarNavMain,
} from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";
import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import { UserDropDown } from "./user-dropdown";
import { Logo } from "@/components/logo";

export function MainSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname == path;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <h1></h1>
      </SidebarHeader>
      <Logo />
      <SidebarMain className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink href="/app" active={isActive("/app")}>
              <HomeIcon className="w-3 h-3 mr-3" />
              Tarefas
            </SidebarNavLink>

            <SidebarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Links extras</SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/app">Precisa de ajuda ?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <UserDropDown />
      </SidebarFooter>
    </Sidebar>
  );
}
