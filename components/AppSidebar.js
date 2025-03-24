import React from 'react'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSubItem,
  } from "@/components/ui/sidebar"
  import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Link from 'next/link'

  // Menu items.
const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]

const AppSidebar = () => {
  return (
    <Sidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Chat List</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {
                            items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon/> 
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))
                        }
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar