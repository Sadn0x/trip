import { useEffect, useState } from "react";

export default function Counter({ time, suffix, plus, value, label, divider }) {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    function handleVisibilityChange() {
      if (!document.hidden && cont < value) {
        incrementCounter();
      }
    }

    function incrementCounter() {
      if (cont < value) {
        const timeout = setTimeout(() => {
          setCont((prevCont) => prevCont + 1);
        }, time); // Ajuste o intervalo conforme necessário

        return () => clearTimeout(timeout); // Limpeza no desmontar do componente ou antes do próximo render
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Inicializar contagem quando a sessão está visível
    if (!document.hidden) {
      incrementCounter();
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [cont, value]);

  // Resetar contador se a prop value mudar
  useEffect(() => {
    setCont(0);
  }, [value]);

  return (
    <div className={divider ? 'border-b-2 xl:border-r-2 xl:border-b-0 pt-8 text-center pb-10 xl:pr-20': 'text-center p-4'} >
      <h3 className="font-bold text-2xl xl:text-7xl uppercase text-[#223645]">
        <span id="counter">{cont}</span>
        {suffix ? suffix : ''}
        {plus ? '+' : ''}
      </h3>
      <p className="text-[#3A78C9] uppercase">{label}</p>
    </div>
  );
}
