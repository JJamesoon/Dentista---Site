import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Smile,
  Baby,
  Scissors,
  Stethoscope,
  Users,
  Clock,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";


export const Route = createFileRoute("/")({
  component: Index,
});

type Professional = {
  name: string;
  specialty: string;
  cro: string;
  image: string;
  bg: string;
  bio: string;
  formacao: string[];
};

const professionals: Professional[] = [
  {
    name: "Dr. José Saraiva Soares",
    specialty: "Cirurgião-dentista",
    cro: "CRORS 8157",
    image: "/Dr. José Saraiva Soares.png",
    bg: "from-teal-200 to-cyan-100",
    bio: "Atua como cirurgião-dentista com foco em clínica-geral e prótese dentária. Dá continuidade à tradição da família Soares com atendimento próximo, ético e voltado ao bem-estar de cada paciente.",
    formacao: [
      "Clínica-geral",
      "Prótese dentária",
      "CRORS 8157",
    ],
  },
  {
    name: "Dr. Pedro Cardoso Soares",
    specialty: "Implantodontia",
    cro: "CRORS 24200",
    image: "/Dr. Pedro Cardoso Soares.png",
    bg: "from-cyan-200 to-emerald-100",
    bio: "Especialista em Implantodontia, habilitado em Lasers em Odontologia e mestre em Odontologia pela USP. Representa a terceira geração da clínica, unindo tecnologia, planejamento e cuidado humano.",
    formacao: [
      "Especialista em Implantodontia",
      "Habilitado em Lasers em Odontologia",
      "Mestre em Odontologia pela USP",
    ],
  },
  {
    name: "Dra. Marcella Dewes Cassal",
    specialty: "Endodontia",
    cro: "CRORS 27515",
    image: "/Dra. Marcella Dewes Cassal.png",
    bg: "from-sky-200 to-teal-100",
    bio: "Especialista em Endodontia, habilitada em Lasers em Odontologia e mestra em Odontologia com foco em Endodontia pela USP. Atua com atenção aos detalhes, conforto e preservação da saúde bucal.",
    formacao: [
      "Especialista em Endodontia",
      "Habilitada em Lasers em Odontologia",
      "Mestra em Odontologia com foco em Endodontia pela USP",
    ],
  },
];

const services = [
  { icon: Stethoscope, title: "Clínica Geral", desc: "Avaliações, prevenção, restaurações, limpeza e cuidado contínuo da saúde bucal." },
  { icon: Heart, title: "Atendimento Domiciliar", desc: "Cuidado odontológico com acolhimento para pacientes que precisam de atendimento em casa." },
  { icon: ShieldCheck, title: "Implantes Dentários", desc: "Reposição de dentes com planejamento, segurança e foco na função mastigatória." },
  { icon: Scissors, title: "Endodontia", desc: "Tratamento de canal com técnica, precisão e atenção ao conforto do paciente." },
  { icon: Sparkles, title: "Harmonização Orofacial", desc: "Procedimentos estéticos faciais com planejamento e equilíbrio natural." },
  { icon: Smile, title: "Odontologia Estética", desc: "Clareamento, reanatomização e tratamentos para valorizar a harmonia do sorriso." },
  { icon: Baby, title: "Periodontia", desc: "Tratamento gengival, controle de inflamações e manutenção dos tecidos de suporte." },
  { icon: Users, title: "Ortodontia", desc: "Aparelhos e acompanhamento para alinhamento dental e melhora da mordida." },
];

export function Index() {
  const [, setOpenPro] = useState<Professional | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/40 bg-background/70 text-foreground shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Smile className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Soares Odontologia</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
            <a href="#historia" className="hover:text-foreground">História</a>
            <a href="#servicos" className="hover:text-foreground">Serviços</a>
            <a href="#equipe" className="hover:text-foreground">Equipe</a>
            <a href="#contato" className="hover:text-foreground">Contato</a>
          </nav>
          <Button asChild className="rounded-full">
            <a href="#contato">Agendar</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <img
          src="/Home.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[50%_5%] sm:object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(8,20,22,0.32),rgba(8,20,22,0.42))]" />
        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl items-end justify-center px-5 pb-6 pt-28 text-center sm:min-h-[640px] sm:px-6 sm:pb-16 sm:pt-52 md:min-h-[900px] md:pb-24 md:pt-96">
          <div className="mx-auto max-w-2xl">
            <Badge variant="secondary" className="mb-3 rounded-full bg-background/85 px-3 py-1 text-[10px] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs">
              <Heart className="mr-1.5 h-3 w-3" /> Odontologia desde 1961
            </Badge>
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Sorrisos que <span className="text-primary-foreground">cuidam de você</span> por inteiro.
            </h1>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-7 sm:gap-3">
              <Button asChild className="rounded-full px-4 text-[11px] sm:px-7 sm:text-sm">
                <a href="#contato">Marcar avaliação</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/70 bg-white/5 px-4 text-[11px] text-white hover:bg-white hover:text-foreground sm:px-7 sm:text-sm"
              >
                <a href="#equipe">Conheça nossa equipe</a>
              </Button>
            </div>
            <div className="mx-auto mt-4 grid max-w-md grid-cols-3 gap-2 border-t border-white/25 pt-2 text-white sm:mt-7 sm:max-w-lg sm:gap-3 sm:pt-4">
              <Stat value="65+" label="anos de história" />
              <Stat value="3" label="gerações de dentistas" />
              <Stat value="4.9★" label="avaliação Google" />
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="scroll-mt-20 bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="rounded-full">Odontologia desde 1961</Badge>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Nossa História
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Dr. Noel José Soares, primeiro dentista da cidade de Tramandaí, iniciou seus
                atendimentos em <strong className="text-foreground">1961</strong>. Desde então, a
                clínica permaneceu ativa no mesmo local.
              </p>
              <p>
                Hoje, ela é administrada pela segunda e terceira gerações de dentistas:
                <strong className="text-foreground"> Dr. José Saraiva Soares</strong> e
                <strong className="text-foreground"> Dr. Pedro Cardoso Soares</strong>.
              </p>
              <p>
                Cada sorriso realizado é uma homenagem ao legado de uma história e ao compromisso
                contínuo com a ética, a saúde bucal e o bem-estar.
              </p>
            </div>
          </div>
          <img
            src="/Home.png"
            alt="Três gerações de dentistas da clínica em julho de 2016"
            loading="lazy"
            width={1200}
            height={720}
            className="aspect-[5/3] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      {/* VÍDEO + ATENDIMENTO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 shadow-xl">
            <div className="px-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary sm:mb-4 sm:h-16 sm:w-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-foreground sm:text-base">Espaço reservado para vídeo</p>
              <p className="mt-1 text-[11px] text-muted-foreground sm:mt-2 sm:text-sm">
                Um vídeo explicativo sobre como cuidar dos seus dentes em casa, ou apresentando a clínica — <span className="text-primary font-medium">o cliente decide.</span>
              </p>
            </div>
          </div>
          <div>
            <Badge variant="outline" className="rounded-full">Atendimento que acolhe</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">
              O cuidado começa antes da cadeira odontológica.
            </h2>
            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-2xl">
                🦷
              </div>
              <p className="text-base font-medium text-foreground">
                Está usando fio dental? <span className="text-primary">Porque aqui nós priorizamos o básico.</span>
              </p>
            </div>
            <p className="mt-4 text-muted-foreground">
              Da recepção ao pós-tratamento, cada detalhe é pensado para você se sentir confortável,
              ouvido e seguro. Nada de pressa. Nada de protocolos frios.
            </p>
            <ul className="mt-6 space-y-4">
              <FeatureRow icon={Heart} title="Escuta ativa" text="Você conta a sua história, a gente desenha o tratamento." />
              <FeatureRow icon={ShieldCheck} title="Tecnologia segura" text="Esterilização hospitalar e protocolos certificados." />
              <FeatureRow icon={Clock} title="Tempo que você merece" text="Consultas sem corre-corre. Cada paciente é único." />
            </ul>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="scroll-mt-20 bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="rounded-full">Serviços</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Tratamentos para cuidar do seu sorriso.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Da prevenção aos tratamentos especializados, a Soares Odontologia reúne cuidado,
              experiência e atenção em cada etapa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="rounded-full">
              <Users className="mr-1.5 h-3 w-3" /> Nossa equipe
            </Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Profissionais que fazem a diferença.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Clique em um profissional para conhecê-lo melhor.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {professionals.map((p) => (
              <Dialog key={p.name} onOpenChange={(o) => !o && setOpenPro(null)}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setOpenPro(p)}
                    className="group mx-auto block w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:max-w-none"
                  >
                    <div className="relative flex h-32 items-center justify-center overflow-hidden sm:h-auto sm:aspect-[5/4]">
                      <img
                        src={p.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm transition duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.bg} opacity-35 mix-blend-screen`} />
                      <div className="absolute inset-0 bg-background/15" />
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={320}
                        height={320}
                        className="relative h-16 w-16 rounded-full border-4 border-background object-cover shadow-xl transition duration-500 group-hover:scale-105 sm:h-32 sm:w-32 md:h-36 md:w-36"
                      />
                    </div>
                    <div className="p-3 sm:p-5">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-primary sm:text-xs">
                        {p.specialty}
                      </p>
                      <h3 className="mt-0.5 text-sm font-semibold sm:text-lg">{p.name}</h3>
                      <p className="mt-0.5 text-[11px] text-muted-foreground sm:text-xs">{p.cro}</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <div className={`-mx-6 -mt-6 mb-2 h-32 rounded-t-lg bg-gradient-to-br ${p.bg}`}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="mx-auto -mb-12 mt-6 h-32 w-32 rounded-full border-4 border-card object-cover shadow-lg"
                    />
                  </div>
                  <DialogHeader className="pt-14 text-center sm:text-center">
                    <DialogTitle className="text-center text-2xl">{p.name}</DialogTitle>
                    <DialogDescription className="text-center text-primary">
                      {p.specialty} · {p.cro}
                    </DialogDescription>
                  </DialogHeader>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                  <div className="rounded-2xl bg-secondary/60 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider">Formação</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {p.formacao.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS / FOTO PACIENTE */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/40 to-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-xl aspect-[3/2] w-full">
            <img
              src="/Cliente_final.png"
              alt="Paciente Soares Odontologia"
              loading="lazy"
              width={900}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Badge variant="outline" className="rounded-full">Avaliação de paciente</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              "Atendimento de urgência foi feito pelo Dr. Pedro."
            </h2>
            <p className="mt-6 text-lg italic text-muted-foreground">
              "Atendimento de urgência foi feito pelo Dr. Pedro, super atencioso, tirou todas
              minhas dúvidas e resolveu meu problema. Recomendo!"
            </p>
            <p className="mt-4 text-sm font-medium">— Geneci Amaral, avaliação no Google</p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-card p-10 shadow-sm md:p-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Badge variant="outline" className="rounded-full">Vamos conversar</Badge>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Pronto para o próximo passo do seu sorriso?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Agende sua avaliação. Sem compromisso, com todo o tempo que você merece.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <ContactLine icon={Phone} text="(51) 3684-1758" />
                <ContactLine icon={MapPin} text="Rua Sahyde Abrahão, 238, Centro — Tramandaí - RS" />
                <ContactLine icon={Clock} text="Seg a Sex · 8h às 20h · Sáb 9h às 14h" />
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="Seu nome"
              />
              <input
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="Telefone / WhatsApp"
              />
              <textarea
                rows={4}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="Como podemos te ajudar?"
              />
              <Button type="submit" size="lg" className="w-full rounded-full">
                Quero ser atendido
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/30 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Soares Odontologia · Tramandaí - RS</p>
          <p>Feito com <Heart className="inline h-3 w-3 fill-primary text-primary" /> para o seu sorriso</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-lg font-semibold text-current sm:text-xl md:text-2xl">{value}</p>
      <p className="mt-0.5 text-[9px] leading-tight text-current/80 sm:text-[10px]">{label}</p>
    </div>
  );
}

function FeatureRow({ icon: Icon, title, text }: { icon: typeof Heart; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </li>
  );
}

function ContactLine({ icon: Icon, text }: { icon: typeof Heart; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-4 w-4 text-primary" />
      <span>{text}</span>
    </div>
  );
}
