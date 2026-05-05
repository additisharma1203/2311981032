const BASE_URL = "http://20.207.122.201/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhZGRpdGlzaGFybWEuMDMxMkBnbWFpbC5jb20iLCJleHAiOjE3Nzc5NjI5OTMsImlhdCI6MTc3Nzk2MjA5MywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImE4OTJhMDQ3LTBiYjItNGQ2ZS1hZjUxLThkODZkZGUzZjVkMyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFkaXRpIHNoYXJtYSIsInN1YiI6IjllOWRlNmVjLWIzMTYtNGI5My04M2NhLWY1Njg3YzQ5NTM2YyJ9LCJlbWFpbCI6ImFkZGl0aXNoYXJtYS4wMzEyQGdtYWlsLmNvbSIsIm5hbWUiOiJhZGl0aSBzaGFybWEiLCJyb2xsTm8iOiIyMzExOTgxMDMyLiIsImFjY2Vzc0NvZGUiOiJFWGZ2RHAiLCJjbGllbnRJRCI6IjllOWRlNmVjLWIzMTYtNGI5My04M2NhLWY1Njg3YzQ5NTM2YyIsImNsaWVudFNlY3JldCI6Im5URHlZVGFySkJhRk1mTUYifQ.WzIShoG56Ai43MpqR4077uVRJ-qQIPFuW54I_tr-bCA"

export async function fetchNotifications(type = "") {
  let url = `${BASE_URL}?limit=10&page=1`;

  if (type) {
    url += `&notification_type=${type}`;
  }

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = await res.json();

    return data.notifications || [];
  } catch (e) {
    console.log("error");
    return [];
  }
}