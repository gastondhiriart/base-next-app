/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: ["react-compiler"],
  rules: {
    "react-compiler/react-compiler": "error",
  },
};

module.exports = nextConfig;
