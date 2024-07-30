import { Sidebar, SidebarFooter, SidebarHeader, SidebarMain, SidebarNav, SidebarNavHeader, SidebarNavHeaderTitle, SidebarNavLink, SidebarNavMain } from "@/components/dashboard/sidebar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return(
        <div className="grid grid-cols-[16rem_1fr] gap-4" >


      <Sidebar>
        <SidebarHeader>
            <h1></h1>
        </SidebarHeader>
        <SidebarMain>
            <SidebarNav>
                <SidebarNavMain>
                    <SidebarNavLink href="/app">Tarefas</SidebarNavLink>
                    <SidebarNavLink href="/app/settings">Configurações</SidebarNavLink>
                </SidebarNavMain>
            </SidebarNav>

            <SidebarNav>
                <SidebarNavHeader>
                    <SidebarNavHeaderTitle>
                        Links extras
                    </SidebarNavHeaderTitle>
                </SidebarNavHeader>
                <SidebarNavMain>
                    <SidebarNavLink href="/app">Precisa de ajuda ?</SidebarNavLink>
                    <SidebarNavLink href="/">Site</SidebarNavLink>
                </SidebarNavMain>
            </SidebarNav>

        </SidebarMain>
        <SidebarFooter>
            <h1>User</h1>
        </SidebarFooter>
      </Sidebar>
        <main>

        {children}

        </main>
        </div>
    )
}