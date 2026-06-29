interface Props {
  title: string;
}

export default function SectionHeading({ title }: Props) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-4xl tracking-wide uppercase">
        {title}
      </h2>

      <div className="mt-3 h-px w-full bg-neutral-300" />
    </div>
  );
}