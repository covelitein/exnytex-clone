'use client'
import * as React from "react";
import { ChevronRight, LayoutDashboard, CheckSquare, DollarSign, Banknote } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Define types for the navigation items
interface NavItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  items?: NavItem[];
}

// Props for the AppSidebar component
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  navlinks: NavItem[]; // navlinks is now a required prop
}

// Sidebar item component for rendering individual navigation items
const SidebarItem: React.FC<{
  item: NavItem;
  onClick: (url: string) => void;
}> = ({ item, onClick }) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className={`mb-2 ${
          item.isActive
            ? "bg-main-green/60 hover:bg-main-green/40 hover:text-white active:text-white active:bg-main-green/50"
            : "hover:text-main-green hover:bg-main-green/20 active:bg-main-green/10 active:text-main-green"
        } px-6 py-5`}
        onClick={() => onClick(item.url)}
      >
        <div className="flex items-center gap-3 [&_svg]:size-5 cursor-pointer w-full">
          {item.icon}
          {item.title}
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

// Collapsible sidebar group component
const CollapsibleSidebarGroup: React.FC<{ item: NavItem }> = ({ item }) => {
  return (
    <Collapsible key={item.title} title={item.title} defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarMenuButton asChild>
          <CollapsibleTrigger>
            {item.title}{" "}
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarMenuButton>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.items?.map((subItem) => (
                <SidebarItem key={subItem.title} item={subItem} onClick={() => {}} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
};

// Main AppSidebar component
export const AppSidebar: React.FC<AppSidebarProps> = ({ navlinks, ...props }) => {
  const router = useRouter();

  const handleNavigation = React.useCallback((url: string) => {
    router.push(url);
  }, [router]);

  return (
    <Sidebar {...props} className="border-main-black">
      <SidebarHeader className="bg-main-black text-white px-10 py-5">
        <h2 className="sm:text-3xl text-xl font-bold">
          <span className="text-main-green">InCap</span>Fx
        </h2>
      </SidebarHeader>
      <SidebarContent className="gap-0 bg-main-black text-white px-3 pt-10">
        {navlinks.map((item) =>
          item.items ? (
            <CollapsibleSidebarGroup key={item.title} item={item} />
          ) : (
            <SidebarMenu key={item.title}>
              <SidebarItem item={item} onClick={handleNavigation} />
            </SidebarMenu>
          )
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};