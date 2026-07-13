'use client';
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
  
    <Image
        src="/imagens/404.png" 
        alt={"Página não encontrada"}
        width={800}
        height={1000}
      />
      <h1>Ops! Página não encontrada</h1>

      <p>
        A página que você procura não existe.
      </p>

      <Link href="/">
        Voltar para início
      </Link>
    </main>
  );
}