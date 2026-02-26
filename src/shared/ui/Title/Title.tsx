interface TitleProps {
  title: string;
  description?: string;
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-neutral-500">{description}</p>
      )}
    </div>
  );
};

export default Title;
