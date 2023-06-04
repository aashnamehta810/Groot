import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    <main className="py-20 dark:bg-gray-800">{props.children}</main>
  </>
);

export { Main };
