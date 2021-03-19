import React from "react";
import { Header, AddItem, ShoppingList, Glossary } from ".";

export default function Home() {
  return (
    <div>
      <Header />
      <ShoppingList />
      <AddItem />
      <Glossary />
    </div>
  );
}
