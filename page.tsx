"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ProfessionalsContainer,
  ProfessionalsContent,
  ProfessionalsTitle,
  ProfessionalsGrid,
  ProfessionalCard,
  ProfessionalAvatar,
  ProfessionalInfo,
  FilterContainer,
  FilterSelect,
  BackButton,
} from "./style";

// Dados fictícios para simular a lista de profissionais
const professionals = [
  {
    id: 1,
    name: "Dra. Ana Silva",
    specialty: "Psicologia",
    avatar: "https://i.pravatar.cc/150?img=1", // Imagem de avatar de exemplo
  },
  {
    id: 2,
    name: "Dr. João Costa",
    specialty: "Clínica Geral",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Dra. Maria Oliveira",
    specialty: "Ginecologia",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Dr. Carlos Pereira",
    specialty: "Endocrinologia",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

// Extrai especialidades únicas para o filtro, incluindo uma opção para "Todas"
const specialties = [
  "Todas",
  ...new Set(professionals.map((p) => p.specialty)),
];

export default function ProfissionaisPage() {
  // Estado para armazenar a especialidade selecionada no filtro
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas");

  // Filtra a lista de profissionais com base na especialidade selecionada
  const filteredProfessionals =
    selectedSpecialty === "Todas"
      ? professionals
      : professionals.filter((p) => p.specialty === selectedSpecialty);

  return (
    <ProfessionalsContainer>
      <ProfessionalsContent>
        <ProfessionalsTitle>Profissionais de Saúde</ProfessionalsTitle>

        <FilterContainer>
          <label htmlFor="specialty-filter">Filtrar por especialidade:</label>
          <FilterSelect id="specialty-filter" value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </FilterSelect>
        </FilterContainer>

        <ProfessionalsGrid>
          {filteredProfessionals.map((prof) => (
            <ProfessionalCard key={prof.id}>
              <ProfessionalAvatar
                src={prof.avatar}
                alt={`Foto de ${prof.name}`}
              />
              <ProfessionalInfo>
                <h3>{prof.name}</h3>
                <p>{prof.specialty}</p>
              </ProfessionalInfo>
            </ProfessionalCard>
          ))}
        </ProfessionalsGrid>
        <Link href="/" legacyBehavior={false}>
          <BackButton as="a">Voltar para o Início</BackButton>
        </Link>
      </ProfessionalsContent>
    </ProfessionalsContainer>
  );
}