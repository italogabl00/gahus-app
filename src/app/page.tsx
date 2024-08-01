import React from "react";
import Navheader from "./app/_components/navheader";
import Drawer from "./app/_components/drawer";

export default function Home() {
  return (
    <Drawer>
      <Navheader />

      <main>Landing Page</main>
    </Drawer>
  );
}
