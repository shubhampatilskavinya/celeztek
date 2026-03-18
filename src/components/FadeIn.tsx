import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
};

const FadeIn = ({ children }: FadeInProps) => {
  return <>{children}</>;
};

export default FadeIn;