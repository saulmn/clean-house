import { Form, Link } from "@remix-run/react";
// components
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Paragraph,
} from "@/components/ui";
// utils
import { useUser } from "@/utils";

export default function UserNav() {
  const user = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-11 w-11 rounded-full bg-[#FFFFFF]/10"
        >
          <Avatar className="h-11 w-11">
            <AvatarImage src={user.avatar ?? ""} alt={user.fullName} />
            <AvatarFallback>FL</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 space-y-2 p-5"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <Paragraph
              variant="subtitle2"
              className="text-lg font-medium leading-none"
            >
              {user.fullName}
            </Paragraph>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem className="py-0" asChild>
            <Link
              to="/dashboard/settings"
              className="h-full w-full cursor-pointer py-1.5"
            >
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuItem className="py-0" asChild>
            <Link
              to="/dashboard/help-center"
              className="w-full cursor-pointer py-1.5"
            >
              Help Center
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuItem className="py-0" asChild>
          <Form
            action="/logout"
            method="POST"
            className="w-full cursor-pointer py-1.5"
          >
            <button>Log out</button>
          </Form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
