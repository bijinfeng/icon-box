import { createContentlayerPlugin } from "next-contentlayer2";
import withRspack from "next-rspack";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@iconbox/ui"],
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withRspack(withContentlayer(nextConfig));
