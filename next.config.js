/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "th.bing.com",
                port: "",
                pathname: "/th/id/*"
            }
        ]
    }
}
