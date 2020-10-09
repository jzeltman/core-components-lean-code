// tailwind.config.js
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: [],
    theme: {
        extend: {
            boxShadow: {
                focus: '0 0 0 3px rgba(60, 85, 240, 1)'
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif']
            },
            colors: {
                black: '#0E0F13',
                gray: {
                    100: '#393939',
                    200: '#B3B3B3',
                    900: '#171717',
                }
            }
        },
    },
    variants: {},
    plugins: [],
}