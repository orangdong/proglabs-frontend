import { useEffect, useState } from "react";
import { useMetaplex } from "./useMetaplex";
import { useRouter } from "next/router";

export default function useMembership({
  memberships,
  redirect = false,
  isPremium = false,
}) {
  const [isMembership, setIsMembership] = useState(false);
  const { metaplex } = useMetaplex();
  const router = useRouter();

  useEffect(() => {
    const getUserNft = async () => {
      const getUserNfts = await metaplex.nfts().findAllByOwner({
        owner: metaplex.identity().publicKey,
      });
      const nfts = getUserNfts.map((nft) => nft.mintAddress.toBase58());

      const checkMembership = memberships.some((membership) =>
        nfts.includes(membership)
      );

      if (isPremium && redirect && !checkMembership) {
        router.replace("/dashboard/my-courses");
      }
      setIsMembership(checkMembership);
    };

    getUserNft().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberships, metaplex]);

  return isMembership;
}
