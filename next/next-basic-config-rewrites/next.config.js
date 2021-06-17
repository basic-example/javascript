module.exports = {
  rewrites: async () => {
    return [
      {
        source: "/home",
        destination: "/main",
      },
    ];
  },
};
