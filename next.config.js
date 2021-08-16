const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    async redirects() {
        return [
            {
                source: "/xtea",
                destination: "/tools/online/xtea",
                permanent: false,
            },
        ]
    },
    assetPrefix: isProd ? '/notex.app/' : ''
}
