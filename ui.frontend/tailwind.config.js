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
            fontSize: {
                h1: ['3.75rem', '1.25'],
                h2: ['2.5rem', '1.35'],
                h3: ['1.5rem', '1.25'],
            },
            colors: {
                black: '#0E0F13',
                gray: {
                    100: '#393939',
                    200: '#B3B3B3',
                    900: '#171717',
                },
                indigo: '#3C55F0',
            },

        },
    },
    variants: {},
    plugins: [],
}