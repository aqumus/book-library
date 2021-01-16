type BookListItemProps = {
  readonly name: string;
  readonly description: string;
  readonly count: number;
  readonly author: string;
};

export function BookListItem({
  name,
  description,
  count,
  author,
}: BookListItemProps) {
  return (
    <div>
      <summary>{name}</summary>
      <p>{description}</p>
      <span>{count}</span>
      <span>{author}</span>
    </div>
  );
}
