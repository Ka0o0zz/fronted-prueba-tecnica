import Link from "next/link";

export interface PropsHeader {
  name: string;
  href: string;
}

const LiMap = ({
  item: { href, name },
  key,
}: {
  item: PropsHeader;
  key: string;
}) => (
  <Link href={href} key={key}>
    <li key={key} className="mx-4">
      {name}
    </li>
  </Link>
);

export const Header = ({ items }: { items: PropsHeader[] }) => {
  return (
    <header className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link href={"/"}>
          <h1 className="fixed left-0 top-0 flex w-full justify-center  pb-6 pt-8 lg:static lg:w-auto lg:p-4 text-2xl">
            Notice now
          </h1>
        </Link>
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <ul className="flex">
          {items.map(({ href, name }, index) =>
            LiMap({ item: { href, name }, key: `${href}-${name}-${index}` })
          )}
        </ul>
      </div>
    </header>
  );
};
