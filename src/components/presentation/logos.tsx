import { Typography } from "@material-tailwind/react";

const logos = [
  "microsoft",
  "cisco",
  "ibm",
  "amazons",
  "salesforce",
  "vodafone",
];

export function LogosPresentation() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-8 text-center font-bold uppercase"
        >
          Trusted by
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {logos.map(({ logo, name }) => (
            <img key={name} src={logo} alt={name} className="w-32 grayscale opacity-60" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogosPresentation;
