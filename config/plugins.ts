export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
      sizeLimit: 10 * 1024 * 1024, // 10MB maximum
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750, 
        small: 500,
        xsmall: 64    // thumbnail
      },
    },
  },
});
