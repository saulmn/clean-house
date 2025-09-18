import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Paragraph,
  navigationMenuTriggerStyle,
} from "~/components/ui";

export default function NavMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Paragraph
              variant="body2"
              className="border-b px-8 py-4 text-secondary-500"
            >
              Solutions
            </Paragraph>
            <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="rounded-sm p-4 hover:bg-secondary-100">
                <NavigationMenuLink asChild>
                  <Link to="/solutions/personal">
                    <img
                      src="/images/personal-menu.png"
                      alt="personal menu"
                      className="h-32 w-full rounded-md"
                    />

                    <Paragraph
                      variant="body1"
                      className="flex items-center justify-between py-3 font-bold text-secondary-500"
                    >
                      <span>Finlab for personal </span>
                      <span>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4299 6.43018L20.4999 12.5002L14.4299 18.5702"
                            stroke="#1A1C1E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.5 12.5H20.33"
                            stroke="#1A1C1E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Paragraph>

                    <Paragraph variant="body3">
                      Easy-to-use personal platfrom and spend management
                      software in an integrated global solution.
                    </Paragraph>
                  </Link>
                </NavigationMenuLink>
              </li>

              <li className="rounded-sm p-4 hover:bg-secondary-100">
                <NavigationMenuLink asChild>
                  <Link to="/solutions/startup">
                    <img
                      src="/images/startup-menu.png"
                      alt="startup menu"
                      className="h-32 w-full rounded-md"
                    />

                    <Paragraph
                      variant="body1"
                      className="flex items-center justify-between py-3 font-bold text-secondary-500"
                    >
                      <span>Finlab for startup </span>
                      <span>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4299 6.43018L20.4999 12.5002L14.4299 18.5702"
                            stroke="#1A1C1E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.5 12.5H20.33"
                            stroke="#1A1C1E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Paragraph>

                    <Paragraph variant="body3">
                      Fast access to global cards, business account (send ACH
                      and wires), spend management.
                    </Paragraph>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to="/product">Product</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Paragraph
              variant="body2"
              className="border-b px-8 py-4 text-secondary-500"
            >
              Resources
            </Paragraph>
            <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="rounded-sm p-4 hover:bg-secondary-100">
                <NavigationMenuLink asChild>
                  <Link to="/resources/accountants">
                    <img
                      src="/images/accountant-service.png"
                      alt="personal menu"
                      className="h-32 w-full rounded-md"
                    />

                    <Paragraph
                      variant="body1"
                      className="flex items-center justify-between py-3 font-bold text-secondary-500"
                    >
                      <span>Accounting Service</span>
                      <span>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4299 6.43018L20.4999 12.5002L14.4299 18.5702"
                            stroke="#1A1C1E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.5 12.5H20.33"
                            stroke="#1A1C1E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Paragraph>

                    <Paragraph variant="body3">
                      Need accounting support? Check out finlab directory of
                      vetted accounting professionals.
                    </Paragraph>
                  </Link>
                </NavigationMenuLink>
              </li>

              <li className="rounded-sm p-4 hover:bg-secondary-100">
                <NavigationMenuLink asChild>
                  <Link to="/resources/partner">
                    <img
                      src="/images/partner-portal.png"
                      alt="startup menu"
                      className="h-32 w-full rounded-md"
                    />

                    <Paragraph
                      variant="body1"
                      className="flex items-center justify-between py-3 font-bold text-secondary-500"
                    >
                      <span>Partner Portal</span>
                      <span>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4299 6.43018L20.4999 12.5002L14.4299 18.5702"
                            stroke="#1A1C1E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.5 12.5H20.33"
                            stroke="#1A1C1E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Paragraph>

                    <Paragraph variant="body3">
                      Give your customers financial products you'll both love.
                    </Paragraph>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to="/support">Support</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
