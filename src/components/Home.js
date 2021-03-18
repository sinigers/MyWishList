import React from "react";
import { Header, AddItem, ShoppingList, Glossary } from ".";

export default function Home() {
  return (
    <div>
      <Header />
      <Glossary />
      <AddItem />
      <ShoppingList />
    </div>
  );
}
