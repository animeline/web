module.exports = (request, response) => {
  return response.json({
    ok: true,
    status: 200,
    message: "Hello World!",
    data: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ],
  });
};
