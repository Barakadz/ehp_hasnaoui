"use client";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AppSideMenu() {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState([""]);

  useEffect(() => {
    if (pathname.startsWith("/bookmarks")) {
      setSelectedKey(["2"]);
    } else if (pathname.startsWith("/courses")) {
      setSelectedKey(["3"]);
    } else if (pathname.startsWith("/tutorials")) {
      setSelectedKey(["4"]);
    } else if (pathname.startsWith("/best-practices")) {
      setSelectedKey(["5"]);
    } else if (pathname.startsWith("/certifications")) {
      setSelectedKey(["6"]);
    } else if (pathname.startsWith("/resources")) {
      setSelectedKey(["7"]);
    } else if (pathname.startsWith("/events")) {
      setSelectedKey(["8"]);
    } else if (pathname.startsWith("/community")) {
      setSelectedKey(["9"]);
    } else if (pathname === "/") {
      setSelectedKey(["1"]);
    }
  }, [pathname]);

  const menuItems = [
    { label: <Link href="/">Dashboard</Link>, key: 1 },
    { label: <Link href="/bookmarks">Rendezvous</Link>, key: 2 },
    { type: "divider" },
    { label: <Link href="/courses">Actualités</Link>, key: 3 },
    { label: <Link href="/tutorials">Galerie</Link>, key: 4 },
    { label: <Link href="/best-practices">Offres d'emplois</Link>, key: 5 },
     { type: "divider" },
    { label: <Link href="/resources">Dexonexion</Link>, key: 7 },
 
  ];
  return (
    <Menu mode="inline" items={menuItems} selectedKeys={selectedKey}></Menu>
  );
}
