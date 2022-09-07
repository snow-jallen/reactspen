import { useQuery } from "react-query";
import { EventsService } from "./EventsService";

export const EventsHooks = {
    useEventsQuery: () => useQuery(["eventsList"],EventsService.GetEventsViaAxios),
    useEventsQueryById: (id: number) => useQuery(["eventById", id], () => EventsService.GetEventById(id))
}