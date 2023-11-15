module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: env("CLOUDINARY_NAME"),
                api_key: env("CLOUDINARY_KEY"),
                api_secret: env("CLOUDINARY_SECRET"),
            },
            actionOptions: {
                upload: {},
                delete: {}, 
            },
        },
    },
    // ...
    bulkoperator: {
        enabled: true,
        resolve: "strapi-bulk-operator",
    },
    'import-export-entries': {
    enabled: true,
    config: {
        serverPublicHostname: 'http://localhost:1337/api',
        },
    },
});
