import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
    infuraId: "",
});

await provider.enable();