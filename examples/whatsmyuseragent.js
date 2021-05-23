const { example } = require("../src/helpers");

example("whatsmyuseragent", async (page) => {
  await loadPage("http://whatsmyuseragent.org/");
});
