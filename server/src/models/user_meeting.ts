import pool from "../db/dbConfig";

function addUserToMeeting(userMeeting: {user_id: number; meeting_id:number}) {
  const values = [userMeeting.user_id, userMeeting.meeting_id];

  return pool
    .query(`
      INSERT INTO users_meetings (user_id, meeting_id)
      VALUES ($1, $2);
    `, values);
};

export {addUserToMeeting};