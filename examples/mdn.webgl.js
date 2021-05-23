const { example } = require("../src/helpers");
const { waitForFrameNavigated } = require("../src/dom");

const waitForSample = waitForFrameNavigated(/mozit.cloud/);

example("MDN WebGL Samples", async (page, { loadPage, action, step }) => {
  await step("Basic scissoring", () =>
    loadPage(
      "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/By_example/Basic_scissoring"
    )
  );

  await step("Clearing by clicking", async (page, { log }) => {
    const [frame] = await Promise.all([
      waitForSample(page),
      loadPage(
        "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking"
      ),
    ]);

    await page.waitForLoadState("networkidle");

    await frame.click("#color-switcher");
    await frame.click("#color-switcher");
    await frame.click("#color-switcher");
  });

  await step("Scissor animation", () =>
    loadPage(
      "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/By_example/Scissor_animation"
    )
  );
  await step("Textures from code", () =>
    loadPage(
      "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/By_example/Textures_from_code"
    )
  );
});
