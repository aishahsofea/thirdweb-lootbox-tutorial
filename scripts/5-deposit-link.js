import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0x69df2551aacf06855D27B7B30A871910bE12648F";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Depositing link...");

  const amount = ethers.utils.parseEther("2");

  await packModule.depositLink(amount);
  console.log("Deposited");

  const balance = await packModule.getLinkBalance();
  console.log(balance);
}

try {
  await main();
} catch (error) {
  console.error("Error depositing the LINK", error);
  process.exit(1);
}
