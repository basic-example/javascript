module.exports = {
  redirects: async () => {
    return [
      {
        source: "/home",
        destination: "/main",
        permanent: true,
      },
    ];
  },
};
