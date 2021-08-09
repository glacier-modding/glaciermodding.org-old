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
}
