"use client";

import { useEffect, useState } from "react";
import { MenuButton, MenuContainer, MenuTitle } from "./styles";

export function AccessibilityMenu() {
  const [contrast, setContrast] = useState(false);

  const increaseFont = () => {
    document.documentElement.style.fontSize = "18px";
  };

  const normalFont = () => {
    document.documentElement.style.fontSize = "16px";
  };

  useEffect(() => {
    const savedContrast = localStorage.getItem("high-contrast");

    if (savedContrast === "true") {
      document.documentElement.classList.add("high-contrast");
      setContrast(true);
    }
  }, []);

  const toggleContrast = () => {
    const html = document.documentElement;

    html.classList.toggle("high-contrast");

    const enabled = html.classList.contains("high-contrast");

    localStorage.setItem(
      "high-contrast",
      String(enabled)
    );

    setContrast(enabled);
  };

  return (
    <MenuContainer
      id="accessibility-menu"
      role="dialog"
      aria-label="Menu de acessibilidade"
    >
      <MenuTitle>
        Acessibilidade
      </MenuTitle>

      <MenuButton
        type="button"
        onClick={increaseFont}
      >
        Aumentar fonte
      </MenuButton>

      <MenuButton
        type="button"
        onClick={normalFont}
      >
        Fonte padrão
      </MenuButton>

      <MenuButton
        type="button"
        onClick={toggleContrast}
        aria-pressed={contrast}
      >
        {contrast
          ? "Desativar alto contraste"
          : "Ativar alto contraste"}
      </MenuButton>

    </MenuContainer>
  );
}