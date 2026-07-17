"use client";

import { useState, ChangeEvent } from "react";
import {
  ProfessionalsContainer,
  ProfessionalsContent,
  Title,
  Subtitle,
  Filters,
  SearchInput,
  Select,
  Grid,
  Card,
  Avatar,
  Button,
  EmptyState,
} from "./style";

const professionals = [
  {
    id: 1,
    name: "Ana Souza",
    specialty: "Psicóloga",
    description:
      "Atendimento psicológico online com acolhimento e escuta qualificada.",
  },
  {
    id: 2,
    name: "Marcos Oliveira",
    specialty: "Clínico Geral",
    description:
      "Atendimento médico humanizado com foco no cuidado integral.",
  },
  {
    id: 3,
    name: "Juliana Santos",
    specialty: "Nutricionista",
    description:
      "Acompanhamento nutricional personalizado e acolhedor.",
  },
];

export default function ProfissionaisPage() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("Todos");

  const filteredProfessionals = professionals.filter((professional) => {
    const nameMatch = professional.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const specialtyMatch =
      specialty === "Todos" ||
      professional.specialty === specialty;

    return nameMatch && specialtyMatch;
  });

  return (
    <ProfessionalsContainer>
      <ProfessionalsContent>
        <Title>Encontre profissionais</Title>

        <Subtitle>
          Profissionais preparados para oferecer um atendimento seguro,
          respeitoso e acolhedor.
        </Subtitle>

        <Filters>
          <SearchInput
            type="search"
            placeholder="Buscar profissional"
            value={search}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearch(event.target.value)
            }
            aria-label="Buscar profissional"
          />

          <Select
            value={specialty}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setSpecialty(event.target.value)
            }
            aria-label="Escolher especialidade"
          >
            <option value="Todos">
              Todas as especialidades
            </option>

            <option value="Psicóloga">
              Psicologia
            </option>

            <option value="Clínico Geral">
              Clínica Geral
            </option>

            <option value="Nutricionista">
              Nutrição
            </option>
          </Select>
        </Filters>

        {filteredProfessionals.length > 0 ? (
          <Grid>
            {filteredProfessionals.map((professional) => (
              <Card key={professional.id}>
                <Avatar aria-hidden="true">
                  {professional.name.charAt(0)}
                </Avatar>

                <h2>{professional.name}</h2>

                <strong>{professional.specialty}</strong>

                <p>{professional.description}</p>

                <Button
                  as="a"
                  href="https://lacreisaude.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar consulta
                </Button>
              </Card>
            ))}
          </Grid>
        ) : (
          <EmptyState>
            Nenhum profissional encontrado.
          </EmptyState>
        )}
      </ProfessionalsContent>
    </ProfessionalsContainer>
  );
}