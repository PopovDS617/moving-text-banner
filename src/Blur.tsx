import React, { PropsWithChildren } from 'react';

const Blur = (props: PropsWithChildren) => {
  return <div className="blur">{props.children}</div>;
};

export default Blur;
