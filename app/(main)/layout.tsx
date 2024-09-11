import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-1 flex-col bg-slate-100 px-6 py-4 sm:px-10">
      {children}
    </div>
  );
};

export default Layout;
