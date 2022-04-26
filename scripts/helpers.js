import { ThirdwebSDK } from "@3rdweb/sdk";
import dotenv from "dotenv";
import ethers from "ethers";

dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key missing");
  process.exit(1);
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    walletPrivateKey,
    ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
  )
);

const appAddress = "0x55098b93e09053834E469e27e7d29a09A6964d22";

export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}
