import React from "react";
import Navheader from "./app/_components/navheader";
import Drawer from "./app/_components/drawer";
import ButtonDemo from "./app/_components/homebutton";
export default function Home() {
  return (
    <Drawer>
      <Navheader />

      <main>
        <ButtonDemo />
        <h1>Landing Page</h1>
      </main>
    </Drawer>
  );
}
