import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Tema = "light" | "dark";

interface TemaContextoTipo {
  tema: Tema;
  alternarTema: () => void;
  definirTema: (novoTema: Tema) => void;
}

const TemaContexto = createContext<TemaContextoTipo | undefined>(undefined);

const obterTemaInicial = (): Tema => {
  if (typeof window === "undefined") {
    return "light";
  }

  const temaArmazenado = window.localStorage.getItem("temaSite") as Tema | null;
  if (temaArmazenado === "light" || temaArmazenado === "dark") {
    return temaArmazenado;
  }

  const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefereEscuro ? "dark" : "light";
};

export const ProvedorTema = ({ children }: { children: ReactNode }) => {
  const [temaAtual, definirTemaAtual] = useState<Tema>(() => obterTemaInicial());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const elementoRaiz = document.documentElement;
    if (temaAtual === "dark") {
      elementoRaiz.classList.add("dark");
    } else {
      elementoRaiz.classList.remove("dark");
    }

    window.localStorage.setItem("temaSite", temaAtual);
  }, [temaAtual]);

  const alternarTema = () => {
    definirTemaAtual((valorAnterior) => (valorAnterior === "light" ? "dark" : "light"));
  };

  const definirTema = (novoTema: Tema) => {
    definirTemaAtual(novoTema);
  };

  return (
    <TemaContexto.Provider value={{ tema: temaAtual, alternarTema, definirTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

export const usarTema = () => {
  const contexto = useContext(TemaContexto);
  if (!contexto) {
    throw new Error("usarTema precisa ser utilizado dentro de um ProvedorTema");
  }
  return contexto;
};
