import React, { useState, ReactNode } from 'react';
import type { DrawerProps } from 'antd';
import {  Drawer, Space } from 'antd';

interface WithDrawerProps {
  button: React.ReactNode;
  children: ReactNode;
  title:string;
  className?:string
}

const WithDrawer: React.FC<WithDrawerProps> = ({ button, children,title ="Basic Drawer",className }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  let What_the_language = localStorage.getItem('language')  ?? "en";


  return (
    <>
      <Space>
        {React.cloneElement(button as React.ReactElement, {
          onClick: () => setOpen(true),
        })}
      </Space>
      <Drawer
        title={title}
        placement={What_the_language === "ar" ?  "right"  : "left"}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={What_the_language}
        width="260"
      
      
                
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