import { Portfolio } from "@/components/Card/Portfolio";
import { Reveal } from "@/components/Reveal/Reveal";

export function Portfolios() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-background-dark text-text-inverted gap-10">
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 mt-20">
        <Reveal slide={true} vertical={false}>
          <Portfolio />
        </Reveal>
        <Reveal slide={true} vertical={false}>
          <Portfolio />
        </Reveal>
        <Reveal slide={true} vertical={false}>
          <Portfolio />
        </Reveal>
        <Reveal slide={true} vertical={false}>
          <Portfolio />
        </Reveal>
      </div>
    </div>
  )
}
