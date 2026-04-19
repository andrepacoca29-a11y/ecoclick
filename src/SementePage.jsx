import { useParams, Link } from "react-router-dom";
import { Sun, Droplets, Clock, Leaf, ArrowLeft, Thermometer, CheckCircle2 } from "lucide-react";
import { sementes } from "./sementes";

export default function SementePage() {
  const { slug } = useParams();
  const semente = sementes[slug];

  if (!semente) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0F4EF] px-6 text-center">
        <span className="text-6xl mb-4">🌱</span>
        <h1 className="text-2xl font-bold text-[#1B4332] mb-2">Semente não encontrada</h1>
        <p className="text-[#52796F] mb-6">Verifique o QR Code ou acesse a lista de sementes.</p>
        <Link to="/" className="eco-btn">Ir para o início</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F4EF] font-body">

      {/* ── HERO ─────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden px-5 pt-10 pb-16"
        style={{ backgroundColor: semente.cor }}
      >
        {/* Círculo decorativo de fundo */}
        <div
          className="absolute -right-16 -top-16 w-56 h-56 rounded-full opacity-20"
          style={{ backgroundColor: semente.corClara }}
        />
        <div
          className="absolute -left-8 bottom-0 w-32 h-32 rounded-full opacity-15"
          style={{ backgroundColor: semente.corClara }}
        />

        <Link
          to="/"
          className="relative flex items-center gap-1 text-white/80 text-sm mb-8 w-fit hover:text-white transition-colors"
        >
          <ArrowLeft size={15} /> Todas as sementes
        </Link>

        <div className="relative">
          <p className="text-white/70 text-xs tracking-[0.2em] uppercase font-semibold mb-1">
            {semente.nomeIngles}
          </p>
          <h1 className="font-display text-5xl text-white leading-none mb-3">
            {semente.emoji} {semente.nome}
          </h1>
          <p className="text-white/85 text-sm leading-relaxed max-w-sm">
            {semente.descricao}
          </p>
        </div>
      </div>

      {/* ── CARDS DE RESUMO ─────────────────────────────── */}
      <div className="px-5 -mt-6 mb-8">
        <div className="grid grid-cols-3 gap-3">
          <ResumoCard
            icon={<Sun size={20} />}
            label="Luz"
            valor={semente.resumo.luz}
            cor={semente.cor}
          />
          <ResumoCard
            icon={<Droplets size={20} />}
            label="Rega"
            valor={semente.resumo.rega}
            cor={semente.cor}
          />
          <ResumoCard
            icon={<Clock size={20} />}
            label="Colheita"
            valor={semente.resumo.colheita}
            cor={semente.cor}
          />
        </div>
      </div>

      {/* ── PASSO A PASSO ──────────────────────────────── */}
      <section className="px-5 mb-8">
        <SectionTitle icon={<Leaf size={18} />} title="Como cultivar" cor={semente.cor} />
        <ol className="space-y-3 mt-4">
          {semente.passos.map((passo, i) => (
            <li
              key={i}
              className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-display font-bold text-sm"
                style={{ backgroundColor: semente.cor }}
              >
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-[#1B4332] text-sm mb-0.5">{passo.titulo}</p>
                <p className="text-[#52796F] text-sm leading-relaxed">{passo.descricao}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── DICA FORTALEZA ─────────────────────────────── */}
      <section className="px-5 mb-12">
        <div
          className="rounded-2xl p-5"
          style={{ backgroundColor: semente.corFundo, borderLeft: `4px solid ${semente.cor}` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Thermometer size={18} style={{ color: semente.cor }} />
            <span className="font-semibold text-sm" style={{ color: semente.cor }}>
              Dica para Fortaleza 🌡️
            </span>
          </div>
          <p className="text-[#344E41] text-sm leading-relaxed">{semente.dicaFortaleza}</p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className="text-center pb-10 px-5">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-lg">🌱</span>
          <span className="font-display text-[#1B4332] font-bold tracking-tight">ecoclick</span>
        </div>
        <p className="text-[#74C69D] text-xs">sementes com propósito</p>
      </footer>
    </div>
  );
}

function ResumoCard({ icon, label, valor, cor }) {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-md flex flex-col items-center text-center gap-1.5">
      <span style={{ color: cor }}>{icon}</span>
      <span className="text-[10px] text-[#74C69D] font-semibold uppercase tracking-wider">{label}</span>
      <span className="text-[11px] text-[#1B4332] font-bold leading-tight">{valor}</span>
    </div>
  );
}

function SectionTitle({ icon, title, cor }) {
  return (
    <div className="flex items-center gap-2">
      <span style={{ color: cor }}>{icon}</span>
      <h2 className="font-display text-xl text-[#1B4332]">{title}</h2>
    </div>
  );
}