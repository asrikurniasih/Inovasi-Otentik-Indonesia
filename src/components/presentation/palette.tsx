import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentationFree() {
 
  return (
    <ThemeProvider>
      <div className="flex place-items-center bg-white py-20">
        <div className="container mx-auto items-center flex">
          <img src="palette.png" alt="palette" className="mx-auto hidden md:flex md:w-1/2" />
          <div className="text-left mb-8 md:w-1/2">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Modern color palette
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Easy to work with, simply beautiful
            </Typography>
            <Typography color="blue-gray" className="lg:pr-64">
              Using Inovasi Otentik Indonesia you get everything you need to start creating your fully functional and responsive Ecommerce website in days, not months.
            </Typography>
            
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentationFree;
