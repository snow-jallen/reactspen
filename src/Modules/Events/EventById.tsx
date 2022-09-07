import React, { useState } from "react";
import { EventsHooks } from "./EventsHooks";

function EventById() {
  const [enteredId, setEnteredId] = useState("");
  const eventId = parseInt(enteredId);
  const eventDetailQuery = EventsHooks.useEventsQueryById(eventId);

  return (
    <div>
      <h3>Enter an Event ID to see its details</h3>
      <input value={enteredId} onChange={(e) => setEnteredId(e.target.value)} />
      <hr />
      {eventDetailQuery.isError ? (
        <div>Could not find event {eventId}</div>
      ) : (
        <>
          <h6>{eventDetailQuery.data?.title}</h6>
          <span>{eventDetailQuery.data?.description}</span>
        </>
      )}
    </div>
  );
}

export default EventById;
