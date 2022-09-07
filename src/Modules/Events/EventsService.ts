import axios from "axios";
import { AspenEvent } from "../../Interfaces";

const BaseUrl = process.env.REACT_APP_BASE_URL
if(!BaseUrl) throw 'No BASE_URL defined';

export const EventsService = {
  GetEventsViaFetch: async () => {
    const res = await fetch(`${BaseUrl}/api/events`);
    return res.json();
  },

  GetEventsViaAxios: async (): Promise<AspenEvent[]> => {
    const res = await axios.get(`${BaseUrl}/api/events`);
    return res.data;
  },

  GetEventById: async (id: number): Promise<AspenEvent> => {
    const result = await axios.get(`${BaseUrl}/api/events/${id}`)
    return result.data;
  }
};
