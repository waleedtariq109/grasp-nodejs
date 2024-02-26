const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("Should respond with 200 status code", async () => {
    await request(app)
      .get("/launches")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

describe("Test POST /launches", () => {
  const completeLaunchData = {
    mission: "Find 2nd Earth",
    rocket: "KP-78",
    target: "Kepler-78 f",
    launchDate: "January 4, 2028",
  };

  const launchDataWithoutDate = {
    mission: "Find 2nd Earth",
    rocket: "KP-78",
    target: "Kepler-78 f",
  };

  const launchDataWithIncorrectDate = {
    mission: "Find 2nd Earth",
    rocket: "KP-78",
    target: "Kepler-78 f",
    launchDate: "Today",
  };

  test("Should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect(201)
      .expect("Content-Type", /json/);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test("Should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect(400)
      .expect("Content-Type", /json/);

    expect(response.body).toStrictEqual({
      error: "Missing required launch data",
    });
  });

  test("Should catch the Invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithIncorrectDate)
      .expect(400)
      .expect("Content-Type", /json/);

    expect(response.body).toStrictEqual({
      error: "Invalid launch Date",
    });
  });
});
