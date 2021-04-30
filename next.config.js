module.exports = {
    webpack(config, { dev, isServer }) {
        config.module.rules = [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    require.resolve("@docusaurus/lqip-loader"),
                    {
                        loader: require.resolve("@endiliey/responsive-loader"),
                        options: {
                            emitFile: !isServer,
                            disable: dev,
                            adapter: require("@endiliey/responsive-loader/sharp"),
                            name: !dev
                                ? "../public/assets/img/[name].[hash:hex:7].[ext]"
                                : "../public/assets/img/[name].[width].[ext]",
                        },
                    },
                ],
            },
            ...config.module.rules,
        ]

        return config
    },
}
