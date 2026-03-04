import SkillGrid from "../tech-stack/SkillCards";

export default function QASection({
  id,
  title,
  description,
  data = []
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
          {title}
        </h2>
        <p className="text-gray-500 text-xs">{description}</p>
      </div>
      <SkillGrid data={data} />
    </section>
  );
}
