module.exports = {
  apps: [
    {
      name: "NuxtAppLightSail",
      exec_mode: "cluster",
      args: "start",
      script: "./.output/server/index.mjs",
    },
  ],
};
