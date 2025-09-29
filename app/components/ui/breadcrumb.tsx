import { Link } from "@remix-run/react";

export function Breadcrumb({
  heading,
  links = [],
}: {
  heading: string;
  links?: { name: string; href: string }[];
}) {
  const currentLink = links[links.length - 1].name;

  return (
    <>
      <h2 className="pb-2 text-xl font-bold text-white md:text-2xl">
        {heading}
      </h2>

      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center">
          {links.map((link) => (
            <li
              key={link.href}
              className="inline-flex w-full items-center text-xs md:text-sm"
            >
              {link.name === currentLink ? (
                <span
                  aria-current="page"
                  className="whitespace-nowrap text-white"
                >
                  {link.name}
                </span>
              ) : (
                <>
                  <Link
                    to={link.href}
                    className="whitespace-nowrap text-[#A2A6AA] hover:underline"
                  >
                    {link.name}
                  </Link>
                  <span className="px-0.5">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
