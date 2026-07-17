"use client";

import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  AboutText,
  Cards,
  Card,
  IconBox,
} from "./style";

import {
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from "lucide-react";


const cards = [
  {
    icon: HeartHandshake,
    title: "Cuidado humanizado",
    text: "Valorizamos a história e a individualidade de cada pessoa.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente seguro",
    text: "Um espaço onde todas as identidades são respeitadas.",
  },
  {
    icon: UsersRound,
    title: "Comunidade",
    text: "Construímos uma rede de apoio entre pessoas e profissionais.",
  },
];


export default function SobrePage() {
  return (
    <AboutContainer>

      <AboutContent>

        <AboutTitle>
          Sobre a Lacrei Saúde
        </AboutTitle>


        <AboutText>
          A Lacrei Saúde conecta pessoas a profissionais preparados
          para oferecer um atendimento seguro, respeitoso e acolhedor.
          Nosso propósito é tornar o cuidado em saúde mais acessível,
          inclusivo e humanizado.
        </AboutText>


        <Cards>

          {cards.map((item) => {

            const Icon = item.icon;

            return (
              <Card key={item.title}>

                <IconBox>
                  <Icon aria-hidden="true" />
                </IconBox>


                <h2>
                  {item.title}
                </h2>


                <p>
                  {item.text}
                </p>

              </Card>
            );

          })}

        </Cards>


      </AboutContent>

    </AboutContainer>
  );
}