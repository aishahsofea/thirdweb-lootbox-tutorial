import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0x69df2551aacf06855D27B7B30A871910bE12648F";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
