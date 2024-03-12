import { useState, useEffect } from "react";
import { Group } from "../models";
import axios from "axios";


export function useGroups() {
    const [groups, setGroups] = useState<Group[]>([]);

    async function fetchGroups() {
        const response = await axios.get<Group[]>("http://localhost:3001/groups");
        setGroups(response.data)
    }

    useEffect(() => {
        fetchGroups();
    }, [])


    return { groups };
}