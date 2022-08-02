const getAboutUsPage = require("../example-js-file/index");
// import getAboutUsPage from "../example-js-file/index"; //es6

test("Returns about-us for english language", () => {
    expect(getAboutUsPage("en-US")).toBe("/about-us");
});

test("Returns chi-siamo for italian language", () => {
    expect(getAboutUsPage("it-IT")).toBe("/chi-siamo");
});