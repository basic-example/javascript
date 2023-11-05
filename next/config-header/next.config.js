module.exports = {
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "aaaaaaaaaaaaaaaaa-:path*",
            value: "wildward path (:path*) available",
          },
        ],
      },
      {
        source: "/about",
        headers: [
          {
            key: "aaaaaaaaaaaaaaaaa-strict",
            value: "strict path available",
          },
        ],
      },
      {
        source: "/([a-z]{1,})",
        headers: [
          {
            key: "aaaaaaaaaaaaaaaaa-regex",
            value: "regex available",
          },
        ],
      },
    ];
  },
};
