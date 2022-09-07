import { QueryClient, QueryClientProvider, useQuery } from "react-query";

type AspenEvent = {
  id: number;
  title: string;
  description: string;
};

export default function EventsList() {
  const { isLoading, error, data } = useQuery<AspenEvent[], Error>(
    "eventsList",
    () =>
      fetch("https://engineering.snow.edu/aspen/api/events").then((res) =>
        res.json()
      )
  );

  if (isLoading) return <div>'Loading...'</div>;

  if (error) return <div>'An error has occurred: ' + error</div>;

  return (
    <>
      <p>This is inside the query.</p>

      {data?.map((e: AspenEvent) => {
        return (
          <div key={e.id}>
            <h1>{e.title}</h1>
            <p>{e.description}</p>
          </div>
        );
      })}

      <hr />

      {/* This is equivalent to the code above */}
      {data?.map((e: AspenEvent) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
        </div>
      ))}
    </>
  );
}
