const { example } = require("../src/helpers");
const { loginToGoogle } = require("./shared/google");

example("framer", async (page, { step, loadPage }) => {
  await loadPage(
    "https://framer.com/projects/f0oJdIOO8ZLQ1iAkKfGX-hvjz5?node=JBLVglfFu-page"
  );

  await loginToGoogle({ step, page });
  await page.waitForNavigation();
  await page.click('[test-id="layer-name-input"]');
});
