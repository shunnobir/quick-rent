import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex flex-1 flex-col bg-slate-100">{children}</div>;
};

export default Layout;
