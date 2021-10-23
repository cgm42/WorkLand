import pool from "../db/dbConfig";

function getAllMeetingsForUser(user_id: number) {
  return pool
    .query(`
      SELECT meetings.* 
      FROM meetings
      JOIN users_meetings
      ON meetings.id = users_meetings.meeting_id
      JOIN users ON users_meetings.user_id = $1
      GROUP BY meetings.id
      ORDER BY date, start_time;
    `, [user_id]);
}

function createMeeting(meeting: {name: string; description: string; date: string; start_time: string; end_time: string}) {
  const {name, description, date, start_time, end_time} = meeting 
  
  const values = [name, description, date, start_time, end_time];

  return pool
  .query(`
    INSERT INTO meetings (name, description, date, start_time, end_time)
    VALUES ($1, $2, $3, $4, $5);
    `, values);
}

export {getAllMeetingsForUser, createMeeting};

