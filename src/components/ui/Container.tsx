import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full md:max-w-screen-lg mx-auto h-screen">{children}</div>
  );
};

export default Container;
