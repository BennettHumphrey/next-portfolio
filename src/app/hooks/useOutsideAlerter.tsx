import { useEffect, RefObject } from "react";

interface OutsideAlerterParams {
  menuRef: RefObject<HTMLElement>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useOutsideAlerter({ menuRef, setMenuOpen }: OutsideAlerterParams) {
  const viewport_width = document.documentElement.clientWidth;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (viewport_width <= 640) {
          setMenuOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setMenuOpen]);
}
