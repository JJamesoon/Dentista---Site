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
  Award,
  Users,
  Clock,
  Phone,
  MapPin,
  Mail,
  Star,
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

import heroClinic from "@/assets/hero-clinic.jpg";
import patientSmile from "@/assets/patient-smile.jpg";
import drAna from "@/assets/dr-ana.jpg";
import drCarlos from "@/assets/dr-carlos.jpg";
import draMariana from "@/assets/dra-mariana.jpg";
import drRafael from "@/assets/dr-rafael.jpg";

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
    name: "Dra. Ana Beatriz Lima",
    specialty: "Clínica Geral & Estética",
    cro: "CRO-SP 45.231",
    image: drAna,
    bg: "from-teal-200 to-cyan-100",
    bio: "Apaixonada por devolver sorrisos, a Dra. Ana atua há mais de 15 anos com odontologia estética, lentes de contato dental e clareamentos. É reconhecida pelo atendimento acolhedor e pela busca constante por resultados naturais.",
    formacao: [
      "Graduação — USP",
      "Especialização em Dentística — APCD",
      "Mestrado em Odontologia Estética",
    ],
  },
  {
    name: "Dr. Carlos Mendes",
    specialty: "Implantodontia",
    cro: "CRO-SP 38.110",
    image: drCarlos,
    bg: "from-cyan-200 to-emerald-100",
    bio: "Especialista em implantes dentários e reabilitação oral complexa. Dr. Carlos une técnica de ponta a um cuidado humano, garantindo conforto em cada etapa do tratamento.",
    formacao: [
      "Graduação — UNICAMP",
      "Especialização em Implantodontia",
      "Membro da Associação Brasileira de Odontologia",
    ],
  },
  {
    name: "Dra. Mariana Costa",
    specialty: "Ortodontia & Alinhadores",
    cro: "CRO-SP 52.804",
    image: draMariana,
    bg: "from-sky-200 to-teal-100",
    bio: "Especialista em alinhadores invisíveis e aparelhos ortodônticos. Acredita que cada sorriso conta uma história e personaliza cada plano de tratamento para o estilo de vida do paciente.",
    formacao: [
      "Graduação — UFRJ",
      "Especialização em Ortodontia",
      "Certified Invisalign Provider",
    ],
  },
  {
    name: "Dr. Rafael Souza",
    specialty: "Odontopediatria",
    cro: "CRO-SP 49.557",
    image: drRafael,
    bg: "from-emerald-200 to-cyan-100",
    bio: "Especialista no cuidado de bebês, crianças e adolescentes. Dr. Rafael transforma a consulta em uma experiência leve, divertida e segura — construindo uma relação positiva com a odontologia desde a infância.",
    formacao: [
      "Graduação — PUC-RS",
      "Especialização em Odontopediatria",
      "Pós em Ortodontia Preventiva",
    ],
  },
];

const services = [
  { icon: Sparkles, title: "Estética Dental", desc: "Lentes de contato, facetas e clareamento para o sorriso dos seus sonhos." },
  { icon: ShieldCheck, title: "Implantes", desc: "Reabilitação completa com tecnologia 3D e materiais premium." },
  { icon: Smile, title: "Ortodontia", desc: "Aparelhos fixos e alinhadores invisíveis personalizados." },
  { icon: Baby, title: "Odontopediatria", desc: "Cuidado especializado e acolhedor para crianças de todas as idades." },
  { icon: Scissors, title: "Cirurgia Oral", desc: "Procedimentos cirúrgicos com segurança e conforto absoluto." },
  { icon: Stethoscope, title: "Clínica Geral", desc: "Check-ups, limpeza e tratamentos preventivos completos." },
];

function Index() {
  const [openPro, setOpenPro] = useState<Professional | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Smile className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Sorriso Vivo</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-xs">
              <Heart className="mr-1.5 h-3 w-3" /> Atendimento humanizado desde 2000
            </Badge>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Sorrisos que <span className="text-primary">cuidam de você</span> por inteiro.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Há 25 anos transformando sorrisos com técnica de ponta e o carinho que faz a diferença.
              Tecnologia, conforto e profissionais apaixonados pelo que fazem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contato">Marcar avaliação</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#equipe">Conheça nossa equipe</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
              <Stat value="25+" label="anos de mercado" />
              <Stat value="12k+" label="sorrisos atendidos" />
              <Stat value="4.9★" label="avaliação Google" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <img
              src={heroClinic}
              alt="Interior moderno da Clínica Sorriso Vivo"
              width={1600}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-4 hidden w-56 rounded-2xl border border-border bg-card p-4 shadow-xl md:block">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <p className="mt-2 text-sm text-card-foreground">
                "Atendimento impecável. Mudou minha relação com o dentista."
              </p>
              <p className="mt-1 text-xs text-muted-foreground">— Juliana M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <Badge variant="outline" className="rounded-full">Nossa história</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              25 anos cuidando de quem importa: você.
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground md:col-span-3">
            <p>
              Fundada em <strong className="text-foreground">2000</strong> pela Dra. Ana Beatriz Lima,
              a Sorriso Vivo nasceu de um sonho simples: oferecer odontologia de qualidade em um
              ambiente acolhedor, onde cada paciente fosse tratado como pessoa — não como número.
            </p>
            <p>
              Começamos com apenas dois consultórios em São Paulo. Hoje somos uma clínica completa com
              quatro especialistas, equipamentos de última geração e mais de <strong className="text-foreground">12 mil sorrisos transformados</strong>.
            </p>
            <p>
              O que não mudou em 25 anos é o nosso compromisso: <strong className="text-foreground">atendimento
              humanizado</strong>, escuta atenta e a busca diária pela excelência técnica.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <Milestone year="2000" text="Fundação da clínica" icon={Heart} />
              <Milestone year="2012" text="Centro de imagem 3D" icon={Sparkles} />
              <Milestone year="2025" text="25 anos de excelência" icon={Award} />
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO + ATENDIMENTO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Y6FpFFTLDF0?rel=0"
                title="Conheça a Clínica Sorriso Vivo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <Badge variant="outline" className="rounded-full">Atendimento que acolhe</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
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
      <section id="servicos" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="rounded-full">Nossos serviços</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Tudo o que seu sorriso precisa, em um só lugar.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Do check-up preventivo à reabilitação completa, oferecemos um portfólio completo de tratamentos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section id="equipe" className="py-20">
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {professionals.map((p) => (
              <Dialog key={p.name} onOpenChange={(o) => !o && setOpenPro(null)}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setOpenPro(p)}
                    className="group block w-full overflow-hidden rounded-3xl border border-border bg-card text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.bg}`}>
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={768}
                        height={960}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        {p.specialty}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{p.cro}</p>
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <img
            src={patientSmile}
            alt="Paciente feliz exibindo sorriso após tratamento"
            loading="lazy"
            width={1200}
            height={800}
            className="aspect-[3/2] w-full rounded-3xl object-cover shadow-xl"
          />
          <div>
            <Badge variant="outline" className="rounded-full">Quem passa por aqui, volta</Badge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              "Encontrei uma equipe que escuta de verdade."
            </h2>
            <p className="mt-6 text-lg italic text-muted-foreground">
              "Sempre tive medo de dentista. Na Sorriso Vivo me senti em casa desde o primeiro
              minuto. Hoje sorrio sem travas — e indico para todo mundo."
            </p>
            <p className="mt-4 text-sm font-medium">— Camila R., paciente há 3 anos</p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20">
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
                <ContactLine icon={Phone} text="(11) 4002-8922" />
                <ContactLine icon={Mail} text="contato@sorrisovivo.com.br" />
                <ContactLine icon={MapPin} text="Av. Paulista, 1000 — São Paulo/SP" />
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
          <p>© {new Date().getFullYear()} Clínica Sorriso Vivo · CNPJ 00.000.000/0001-00</p>
          <p>Feito com <Heart className="inline h-3 w-3 fill-primary text-primary" /> para o seu sorriso</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Milestone({ year, text, icon: Icon }: { year: string; text: string; icon: typeof Heart }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-2 text-lg font-semibold">{year}</p>
      <p className="text-xs text-muted-foreground">{text}</p>
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
