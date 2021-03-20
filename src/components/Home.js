import React from "react";
import {
  Header,
  AddItem,
  ShoppingList,
  Glossary,
  NewList,
  BottomNavBar
} from ".";

export default function Home() {
  return (
    <div>
      {/* <Header />
      <ShoppingList />
      <AddItem />
      <Glossary /> */}
      <NewList />
      <BottomNavBar />
    </div>
  );
}
