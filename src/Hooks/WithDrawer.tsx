import React, { useState, ReactNode } from 'react';
import type { DrawerProps } from 'antd';
import {  Drawer, Space } from 'antd';

interface WithDrawerProps {
  button: React.ReactNode;
  children: ReactNode;
  title:string;
  className?:string,
  iopen?:boolean,
  setOpen:any
}

const WithDrawer: React.FC<WithDrawerProps> = ({ children,title ="Basic Drawer",className ,setOpen, iopen }) => {
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');



  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        closable={false}
        onClose={() => setOpen(false)}
        open={iopen}
        key={placement}
      >
        <div className={className}>
        {children}

        </div>
      </Drawer>
    </>
  );
};

export default WithDrawer;


//   <WithDrawer
//   button={<Button type="primary">Open</Button>}
// >
//   {/* Your content goes here */}
// </WithDrawer>