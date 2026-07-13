import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../page";
import { ThemeProvider } from "../../styles/ThemeProvider";


jest.mock("../../components/button/Button", () => {
  return {
    Button: ({
      children,
      href,
    }: {
      children: React.ReactNode;
      href?: string;
    }) => {
      if (href) {
        return <a href={href}>{children}</a>;
      }

      return <button>{children}</button>;
    },
  };
});


describe("Home Page", () => {

  beforeEach(() => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );
  });


  it("should render the main heading", () => {
    const heading = screen.getByRole("heading", {
      name: /Saúde com respeito e acolhimento/i,
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });


  it("should render the action buttons", () => {
    const findButton = screen.getByRole("link", {
      name: /Encontrar profissional/i,
    });

    const moreInfoButton = screen.getByRole("link", {
      name: /Saber mais/i,
    });


    expect(findButton).toBeInTheDocument();
    expect(findButton).toHaveAttribute(
      "href",
      "/profissionais"
    );


    expect(moreInfoButton).toBeInTheDocument();
    expect(moreInfoButton).toHaveAttribute(
      "href",
      "/sobre"
    );
  });


  it("should render the feature cards", () => {

    expect(
      screen.getByRole("heading", {
        name: /Acolhimento genuíno/i,
        level: 2,
      })
    ).toBeInTheDocument();


    expect(
      screen.getByRole("heading", {
        name: /Ambiente seguro/i,
        level: 2,
      })
    ).toBeInTheDocument();


    expect(
      screen.getByRole("heading", {
        name: /Rede de apoio/i,
        level: 2,
      })
    ).toBeInTheDocument();

  });

});