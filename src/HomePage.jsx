import { Link } from "react-router-dom";
import { sementesLista } from "./sementes";
import { Scan } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F0F4EF] font-body">
      {/* ── HEADER ─────────────────────────────────────── */}
      <header className="px-5 pt-12 pb-8 bg-[#1B4332]">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">🌱</span>
          <span className="font-display text-white text-2xl font-bold tracking-tight">ecoclick</span>
        </div>
        <h1 className="font-display text-4xl text-white leading-tight mb-2">
          Cultive com<br />
          <span className="text-[#74C69D]">propósito</span>
        </h1>
        <p className="text-white/60 text-sm flex items-center gap-2 mt-3">
          <Scan size={14} />
          Escaneie o QR Code da sua semente ou escolha abaixo
        </p>
      </header>

      {/* ── LISTA DE SEMENTES ──────────────────────────── */}
      <main className="px-5 py-8">
        <p className="text-xs text-[#74C69D] font-semibold uppercase tracking-[0.2em] mb-4">
          Suas sementes
        </p>
        <div className="grid grid-cols-2 gap-3">
          {sementesLista.map((s) => (
            <Link
              key={s.id}
              to={`/cultivo/${s.id}`}
              className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-2 active:scale-95 transition-transform"
            >
              <span className="text-3xl">{s.emoji}</span>
              <div>
                <p className="font-display text-[#1B4332] font-bold leading-tight">{s.nome}</p>
                <p className="text-[#74C69D] text-xs">{s.resumo.colheita}</p>
              </div>
              <div
                className="mt-auto self-start text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: s.cor }}
              >
                Ver guia →
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-center pb-10 text-xs text-[#74C69D]">
        ecoclick · sementes com propósito
      </footer>
    </div>
  );
}