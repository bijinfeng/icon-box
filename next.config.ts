import { createContentlayerPlugin } from "next-contentlayer2";
// import withRspack from "next-rspack";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@iconbox/ui"],
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^cloudflare:sockets$/,
      }),
    );
    return config;
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

// export default withRspack(withContentlayer(nextConfig));

export default withContentlayer(nextConfig);
