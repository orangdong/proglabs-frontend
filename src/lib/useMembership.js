import { useEffect, useState } from "react";
import { useMetaplex } from "./useMetaplex";

export default function useMembership(memberships) {
  const [isMembership, setIsMembership] = useState(false);
  const { metaplex } = useMetaplex();

  useEffect(() => {
    const getUserNft = async () => {
      const getUserNfts = await metaplex.nfts().findAllByOwner({
        owner: metaplex.identity().publicKey,
      });
      const nfts = getUserNfts.map((nft) => nft.mintAddress.toBase58());

      const checkMembership = memberships.some((membership) =>
        nfts.includes(membership)
      );

      setIsMembership(checkMembership);
    };

    getUserNft().catch(console.error);
  }, [memberships, metaplex]);

  return isMembership;
}
