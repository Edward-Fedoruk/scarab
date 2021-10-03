import { FC, SVGProps } from 'react';

declare module '*.scss';
declare module '*.svg' {
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
