import { get } from "./baseService";
import { IJobSearch } from "../models/IJobSearch";

const BASEURL = `https://historical.api.jobtechdev.se/search`;

export const getHistoricalJobs = async (): Promise<IJobSearch[]> => {
    const jobsResponse = await get<IJobSearch[]>(BASEURL);
    console.log(jobsResponse);
    return jobsResponse;
}