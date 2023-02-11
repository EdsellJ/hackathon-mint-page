/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_EVENTBRITE_ORG_ID: "892957692073",
    NEXT_PUBLIC_EVENTBRITE_BASE_API: "https://www.eventbriteapi.com/v3",
    NEXT_PUBLIC_EVENTBRITE_PERSONAL_AUTH_TOKEN: "TTWE2VOCBIDD4O7BU44Y",
    WEB3_API: "https://web3.career/api/v1",
    WEB3_API_TOKEN: "A8qGWD3bCZi2jwyrRGBYGfDenw3bjbQA",
  },
};

module.exports = nextConfig;
