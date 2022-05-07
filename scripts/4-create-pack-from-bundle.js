import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModuleAddress = "0x508EF71f5dF615bbFf439a21788a41dC9FBD2bF2";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = "0x69df2551aacf06855D27B7B30A871910bE12648F";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Getting all NFTs from bundle...");
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFTs in bundle:");
  console.log(nftsInBundle);

  console.log("Creating a pack containing the NFTs from bundle..");

  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: "Fancy Cars Pack!",
      image: readFileSync("./assets/fancy-cars.jpeg"),
    },
    assets: nftsInBundle.map((nft) => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log("Pack created!");
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
