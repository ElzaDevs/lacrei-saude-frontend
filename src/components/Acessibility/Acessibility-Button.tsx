"use client";

import { useCallback, useState } from "react";
import { Accessibility } from "lucide-react";

import { FloatingButton } from "./styles";
import { AccessibilityMenu } from "./Acessibility";

export function AccessibilityButton() {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      {open && <AccessibilityMenu />}

      <FloatingButton
        type="button"
        aria-label="Abrir menu de acessibilidade"
        aria-expanded={open}
        aria-controls="accessibility-menu"
        onClick={handleToggleMenu}
      >
        <Accessibility 
          size={30} 
          aria-hidden="true"
        />
      </FloatingButton>
    </>
  );
}