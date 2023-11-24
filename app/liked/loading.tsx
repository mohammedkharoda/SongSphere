"use client";

import Box from "@/components/Box";
import "ldrs/ring";
import { helix } from "ldrs";

// Default values shown
const Loading = () => {
  helix.register();
  return (
    <Box className="h-full flex items-center justify-center">
      <l-helix
        size="55"
        speed="2.5"
        color="green"
      ></l-helix>
    </Box>
  );
};

export default Loading;
