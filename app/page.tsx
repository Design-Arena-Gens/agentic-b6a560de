import { education, experiences, profile, projects, skills } from '../data/profile';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 space-y-4">
      <h2 className="section-title">{title}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card p-5 md:p-6">{children}</div>;
}

export default function Page() {
  return (
    <div className="space-y-12">
      <Section id="overview" title="Overview">
        <Card>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{profile.name}</h1>
              <p className="mt-1 text-brand-700 dark:text-brand-300 font-medium">{profile.title}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">{profile.summary}</p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{profile.location}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="card p-4"><span className="block text-2xl font-semibold">{experiences.length}</span> Roles</div>
              <div className="card p-4"><span className="block text-2xl font-semibold">{projects.length}</span> Projects</div>
            </div>
          </div>
        </Card>
      </Section>

      <Section id="experience" title="Experience">
        {experiences.map((exp) => (
          <Card key={exp.company + exp.role}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">{exp.role} ? {exp.company}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.summary}</p>
                <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <Card key={p.name}>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-brand-100 text-brand-800 dark:bg-brand-800/30 dark:text-brand-200 px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
              {p.link && (
                <a className="mt-3 inline-flex items-center gap-2 text-brand-700 dark:text-brand-300 hover:underline" href={p.link} target="_blank" rel="noreferrer">Visit ?</a>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <Card>
          <div className="grid gap-3">
            {skills.map((s) => (
              <div key={s.name} className="grid gap-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-brand-500 dark:bg-brand-400" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section id="education" title="Education">
        {education.map((e) => (
          <Card key={e.school + e.degree}>
            <h3 className="text-lg font-semibold">{e.school}</h3>
            <p className="text-gray-700 dark:text-gray-300">{e.degree}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{e.period}</p>
          </Card>
        ))}
      </Section>
    </div>
  );
}
