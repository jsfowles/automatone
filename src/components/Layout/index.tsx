import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <main className="bg-black h-full">{children}</main>;
};

export default Layout;
