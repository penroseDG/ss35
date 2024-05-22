import React from 'react';
interface ChildrenProps {
  childName: string;
}

const Children_Comp: React.FC<ChildrenProps> = (props) => {
  return (
    <div>
      <h2>HỌ VÀ TÊN CON: {props.childName}</h2>
    </div>
  );
};

export default Children_Comp;
