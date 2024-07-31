import { Sidebar, SidebarFooter, SidebarHeader, SidebarMain, SidebarNav, SidebarNavHeader, SidebarNavHeaderTitle, SidebarNavLink, SidebarNavMain } from "@/components/dashboard/sidebar";
import { PropsWithChildren } from "react";
import { MainSidebar } from "./_components/main-sidebar";

export default function Layout({ children }: PropsWithChildren) {
    return(
        <div className="grid grid-cols-[16rem_1fr] gap-4" >

     <MainSidebar></MainSidebar>
      
        <main>

        {children}

        </main>
        </div>
    )
}