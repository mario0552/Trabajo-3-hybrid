import { useEffect, useState } from "react";
import { getWishlist, toggleWishlist, WISHLIST_EVENT } from "../utils/wishlist";

function useWishlist() {
  const [wishlist, setWishlist] = useState(getWishlist);

  // Cuando se agrega o quita algo, todos los que usan el hook se actualizan
  useEffect(() => {
    const recargar = () => setWishlist(getWishlist());
    window.addEventListener(WISHLIST_EVENT, recargar);
    return () => window.removeEventListener(WISHLIST_EVENT, recargar);
  }, []);

  const isInWishlist = (productId) => wishlist.includes(productId);

  return { wishlist, isInWishlist, toggleWishlist };
}

export default useWishlist;
