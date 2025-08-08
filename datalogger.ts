// The Google Form's submission URL.
const FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7M4iBTSwx2p-ZU6SKo5SiNag1XzNJrK7KixRcwSmesgnccw/formResponse';

// Field IDs from your Google Form.
// Note: 'emailAddress' is the special name for the built-in email collection field.
const FIELD_IDS = {
  name: 'entry.518076302',
  email: 'emailAddress',
  university: 'entry.1019666774',
  score: 'entry.124774752',
};

interface UserData {
  name: string;
  email: string;
  university: string;
  score: number;
}

/**
 * Sends the complete user data (name, email, university, score) to a Google Form.
 * This is a "fire-and-forget" operation, typically called at the end of the session.
 * @param {UserData} data - The user's information and final score.
 * @returns {Promise<void>}
 */
export const logUserData = async (data: UserData): Promise<void> => {
  const formData = new FormData();
  formData.append(FIELD_IDS.name, data.name);
  formData.append(FIELD_IDS.email, data.email);
  formData.append(FIELD_IDS.university, data.university);
  formData.append(FIELD_IDS.score, String(Math.round(data.score)));

  try {
    // Send the data to the Google Form URL.
    await fetch(FORM_URL, {
      method: 'POST',
      body: formData,
      // 'no-cors' mode allows sending the request without needing CORS permissions,
      // as we don't need to read the response from the server.
      mode: 'no-cors',
    });
  } catch (error) {
    // If the submission fails, log the error to the console for debugging.
    // We don't show an error to the user to avoid disrupting their experience.
    console.error('Error logging user data:', error);
  }
};
