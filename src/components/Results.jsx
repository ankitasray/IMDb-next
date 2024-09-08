
export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <h2>key={result.id} result={result.original_title}</h2>
      ))}
    </div>
  );
}