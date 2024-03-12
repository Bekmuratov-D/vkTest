import { Group } from "../../models"
import "./Group.css"
import { useEffect, useState } from "react";


interface IGroupPriops {
    group: Group
}

export default function GroupItem({ group }: IGroupPriops) {

    const [showFriends, setShowFriends] = useState<number | null>(null);


    const toggleFriends = ({ group }: IGroupPriops) => {
        if (showFriends === group.id) {
            setShowFriends(null);
        } else {
            setShowFriends(group.id);
        }
    }


    return (
        <div className="group">
            <div className="group-conainer">
                <p>{group.name}</p>
                {group.avatar_color &&
                    <div style={{ width: '100px', height: '100px', backgroundColor: group.avatar_color, borderRadius: '50%' }}></div>
                }
                <div>{group.closed ? 'Closed' : 'Open'}</div>
            </div>
            <div>Members: {group.members_count}</div>
            {group.friends &&
                <div> <button onClick={() => toggleFriends({ group })}> Friends: {group.friends.length}</button></div>
            }
            {showFriends === group.id && group.friends && group.friends.map(friend => (
                <div key={`${friend.first_name}-${friend.last_name}`}>{friend.first_name} {friend.last_name}</div>
            ))}
        </div>
    )
}

