import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon1.png" />
    ),
    title: "Proactive Managed Services",
    description:
      "We proactively manage your IT, keeping systems reliable and secure.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon2.png" />
    ),
    title: "Custom Application Development",
    description:
      "Building custom, AI-powered applications to streamline your business operations.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon3.png" />
    ),
    title: "Strategic IT Consulting",
    description:
      "Expert guidance for your successful digital transformation journey.",
  }
];

export function FeaturePresentation() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-10 text-center">
        <div className="flex justify-center align-center relative z-5">
          <Typography color="dark" className="text-xl mr-2 font-normal">
            Services We Offer
          </Typography>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeaturePresentation;
