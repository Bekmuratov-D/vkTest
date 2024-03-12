import { useState, useEffect } from "react";
import { Group } from "../models";
import { useGroups } from "./groups";

export function useFilter() {
    const { groups } = useGroups();

    const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);
    const [selectedPrivacy, setSelectedPrivacy] = useState('all');
    const [selectedColor, setSelectedColor] = useState('all');
    const [showFriends, setShowFriends] = useState<number | null>(null);

    useEffect(() => {
        filterGroups();
    }, [groups, selectedPrivacy, selectedColor, showFriends]);

    const filterGroups = () => {
        let filtered = groups;

        if (selectedPrivacy !== 'all') {
            filtered = filtered.filter(group => group.closed === (selectedPrivacy === 'closed'));
        }

        if (selectedColor !== 'all') {
            filtered = filtered.filter(group => group.avatar_color === selectedColor);
        }

        if (showFriends) {
            filtered = filtered.map(group => {
                if (group.id === showFriends) {
                    return {
                        ...group,
                        showFriends: true
                    };
                }
                return group;
            });
        }

        setFilteredGroups(filtered);
    };

    return { filteredGroups, setSelectedPrivacy }
}