"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
import { BugPlayIcon} from "lucide-react";




const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 lg:p-6 border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-sm rounded-2xl">
        <Link href="/" className="text-3xl flex items-center gap-5"><BugPlayIcon size="32"/> <span className="font-semibold">Eric Kams</span> </Link>
        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle({className: "bg-transparent hover:bg-white"})}>
              Wo ist Eric?
            </NavigationMenuLink>
          </Link>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle({className: "bg-transparent hover:bg-white"})}>
            Projekten
            </NavigationMenuLink>
          </Link>
          <Link href="https://www.linkedin.com/in/eric-kamdem/" target="_blank" legacyBehavior passHref>
            <NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-primary !text-primary-foreground hover:bg-primary/90' }) } target="_blank">
             Mit mir arbeiten
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </nav>
  );
};

export default Navbar;