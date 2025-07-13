export default ({ env }) => {
  console.log("✅ APP_KEYS from env:", env('APP_KEYS')); // ✅ Log here

  return {
    host: env('STRAPI_HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};
