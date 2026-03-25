import { memo } from "react";
import { cn } from "../../shared/utils/cn";
import SkillGrid from "../../shared/ui/SkillGrid";

const QASection = memo(function QASection({
  id,
  title,
  description,
  data = [],
  titleColor = "text-green-400"
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h2 className={cn("text-2xl md:text-3xl font-semibold mb-1", titleColor)}>
          {title}
        </h2>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <SkillGrid data={data} />
    </section>
  );
});

export default QASection;
