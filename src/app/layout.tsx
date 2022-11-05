import React from "react";
import "../styles/dist.css";
import { Nav } from "./nav";

export default function RootLayout(props: any) {
  return (
    <html>
      <head></head>
      <body className="bg-cyan-200 max-w-lg m-auto">
        <Nav />
        {props.children}
      </body>
    </html>
  );
}
