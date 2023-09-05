export const createCalendarEvent = async (user, params) => {
    if (!user.accessToken || !user.client || !user.uid) return false;
    try {
        const response = await fetch("http://localhost:3001/calendar_events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "access-token": user.accessToken,
                client: user.client,
                uid: user.uid,
            },
            body: JSON.stringify({ calendar_event: params }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log("New event created:", data);
            return true;
        } else {
            console.log(`HTTPエラーコード: ${response.status}`);
            return false;
        }
    } catch (error) {
        console.log("Error creating new event:", error);
        false;
    }
};

export const updateCalendarEvent = async (user, params) => {
    if (!user.accessToken || !user.client || !user.uid) return false;
    try {
        const response = await fetch(`http://localhost:3001/calendar_events/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "access-token": user.accessToken,
                client: user.client,
                uid: user.uid,
            },
            body: JSON.stringify({ calendar_event: params }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log("New event created:", data);
            return true;
        } else {
            console.log(`HTTPエラーコード: ${response.status}`);
            return false;
        }
    } catch (error) {
        console.log("Error creating new event:", error);
        false;
    }
};

export const deleteCalendarEvent = async (user, eventId) => {
    if (!user.accessToken || !user.client || !user.uid) return false;
    try {
        const response = await fetch(`http://localhost:3001/calendar_events/${eventId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "access-token": user.accessToken,
                client: user.client,
                uid: user.uid,
            },
        });
        if (response.ok) {
            console.log("Event deleted.");
            return true;
        } else {
            console.log(`HTTPエラーコード: ${response.status}`);
            return false;
        }
    } catch (error) {
        console.log("Error deleting event:", error);
        return false;
    }
};
