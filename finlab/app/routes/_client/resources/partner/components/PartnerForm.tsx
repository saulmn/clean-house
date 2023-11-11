import {
  Button,
  Container,
  Heading,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui";

export default function PartnerForm() {
  return (
    <section className="bg-white py-10 lg:py-24">
      <Container>
        <div className="mx-auto mb-3 w-fit rounded-full bg-[#F4F4F7] px-6 py-1.5 text-xs text-secondary-500 lg:text-sm">
          Become our partner 🤟🏻
        </div>

        <Heading
          variant="h2"
          className="pb-12 text-center font-bold leading-tight tracking-[-1.68px] text-[#1B2632]"
        >
          Let’s become a partner
        </Heading>

        <div className="mx-auto max-w-3xl space-y-7">
          <div className="space-y-[3px]">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="First Name" />
          </div>

          <div className="space-y-[3px]">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Last Name" />
          </div>

          <div className="space-y-[3px]">
            <Label htmlFor="workEmail">Work Email</Label>
            <Input type="email" id="workEmail" placeholder="Work Email" />
          </div>

          <div className="space-y-[3px]">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" placeholder="Company Name" />
          </div>

          <div className="space-y-[3px]">
            <Label htmlFor="companyWebsite">Company website</Label>
            <Input id="companyWebsite" placeholder="Company website" />
          </div>

          <div className="space-y-[3px]">
            <Label htmlFor="numberOfClient">Number of client served</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end">
            <Button size="lg">Apply</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
