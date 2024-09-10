import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 px-6 py-4 *:flex-1 sm:px-10">
      {children}
    </div>
  );
};

export default Layout;
