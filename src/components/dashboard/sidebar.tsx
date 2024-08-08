import Link from 'next/link'

import { cn } from '@/lib/utils'


export type DashboardSideBarGenericProps<T = unknown> = {
    children: React.ReactNode
    className?: string
} & T


export function DashboardSideBar({ className, children }: DashboardSideBarGenericProps) {
    return (
        <aside className={cn(['border-r border-border flex flex-col space-y-6', className])}>
            {children}
        </aside>
    )
}

export function DashboardSideBarHeader({ className, children }: DashboardSideBarGenericProps) {
    return( 
        <header className={cn(['px-6 py-3 border-b border-border', className])}>
            {children}
        </header>
)}

export function DashboardSideBarHeaderTitle({ className, children }: DashboardSideBarGenericProps) {
    return( 
        <h2 className={cn(['', className])}>
            {children}
        </h2>
)}

export function DashboardSideBarMain({ className, children }: DashboardSideBarGenericProps) {
    return(
        <main className={cn(['px-3', className])}>
        {children}
    </main>
    )
}

export function DashboardSideBarNav({ className, children }: DashboardSideBarGenericProps) {
    return(
        <nav className={cn(['', className])}>
        {children}
        </nav>
    )
}

export function DashboardSideBarNavHeader({ className, children }: DashboardSideBarGenericProps) {
    return(
        <header className={cn(['', className])}>
        {children}
        </header>
    )
}



export function DashboardSideBarNavHeaderTitle({ className, children }: DashboardSideBarGenericProps) {
    return(
        <div className={cn(['text-xs uppercase text-muted-foreground ml-3', className])}>
        {children}
        </div>
    )
}


export function DashboardSideBarNavMain({ className, children }: DashboardSideBarGenericProps) {
    return(
        <main className={cn(['flex flex-col', className])}>
        {children}
        </main>
    )
}


type DashboardSideBarNavLinkProps = {
    href: string
    active?: boolean
}

export function DashboardSideBarNavLink({ className, children, href, active }: DashboardSideBarGenericProps<DashboardSideBarNavLinkProps>) {
    return(
        <Link href={href} className={cn([
            'flex items-center text-xs px-3 py-2 rounded-md',
            active && 'bg-secondary',
             className
             ])}>
        {children}
        </Link>
    )
}


export function DashboardSideBarFooter({ className, children }: DashboardSideBarGenericProps) {
    return (
        <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
            {children}
        </footer>
    )
}
