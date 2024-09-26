import React, { Suspense } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Suspense>
      <div className="flex-1">{children}</div>
    </Suspense>
  );
};

export default Layout;
