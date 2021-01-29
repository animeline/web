module.exports = {
  extends: ["react-app", "react-app/jest"],
  plugins: ["import-helpers"],
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        alphabetize: { order: "asc", ignoreCase: true },
        groups: [
          "module",
          "/^@(config)/",
          "/^@(routes|pages)/",
          "/^@(store|graphql|services)/",
          "/^@(interfaces|types)/",
          "/^@(assets|utils)/",
          "/^@(components|styles)/",
          ["parent", "sibling", "index"],
        ],
      },
    ],
  },
};
