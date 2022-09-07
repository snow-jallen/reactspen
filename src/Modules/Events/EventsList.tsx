import { EventsHooks } from "./EventsHooks";
import { AspenEvent } from "../../Interfaces";

export function EventsList() {
  const { isLoading, error, data } = EventsHooks.useEventsQuery();

  if (isLoading) return <div>'Loading...'</div>;

  if (error) return <div>'An error has occurred: ' + error</div>;

  if(!data) return <div>🤔 No data found</div>

  return (
    <>
      <p>This is inside the query.</p>

      {data.map((e: AspenEvent) => {
        return (
          <div key={e.id}>
            <h1>{e.title}</h1>
            <p>{e.description}</p>
          </div>
        );
      })}

      <hr />

      {/* This is equivalent to the code above */}
      {data.map((e: AspenEvent) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
        </div>
      ))}
    </>
  );
}
