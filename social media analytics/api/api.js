import axios from "axios";

const API_URL = "http://20.244.56.144/test";

export const fetchApi = async (route) => {
    try {
        const response = await axios.get(`${API_URL}${route}`, {
            headers: {
                Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTM2NTAyLCJpYXQiOjE3NDMxMzYyMDIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdlOTAwMjY0LTM2NzgtNDYzOS04Nzk2LWEwOGM2NDdkNGU5MCIsInN1YiI6InNodWJoYW1ndXB0YTIwMjJAdml0YmhvcGFsLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI3ZTkwMDI2NC0zNjc4LTQ2MzktODc5Ni1hMDhjNjQ3ZDRlOTAiLCJjbGllbnRTZWNyZXQiOiJyWkpQYlNMRHpGSkx3aVFzIiwib3duZXJOYW1lIjoiU2h1YmhhbSBHdXB0YSIsIm93bmVyRW1haWwiOiJzaHViaGFtZ3VwdGEyMDIyQHZpdGJob3BhbC5hYy5pbiIsInJvbGxObyI6IjIyQkFJMTAxODcifQ.e08jej0wA0-FY_U7TsYeuHMZPInRvduMhVfUeGaJ3vU`,
                expires
            }
        });
        console.log(data)
        return response.data;
    } catch (error) {
        console.error("Error fetching", route, error.message);
        return null;
    }
}

