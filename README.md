# Symposium Backend

This is the backend server for the Symposium 2026 event website ("Visionary Vibes"). It handles event data management and participant registration.

## Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB (via Mongoose)
*   **Middleware:** CORS

## Project Structure

*   `index.js`: Main entry point. Defines API routes and server configuration.
*   `seedEvents.js`: Script to populate the database with initial event data.
*   `MongoDB/`: Contains Mongoose schemas (`eventSchema.js`, `registrationSchema.js`).
*   `public/`: Static assets (images).

## Setup & Installation

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start the Server:**
    ```bash
    node index.js
    ```
    The server will run on `http://localhost:5000`.

## API Endpoints

### Events

*   **`GET /events`**
    *   Fetches a list of all available events.
    *   Response: Array of event objects.

*   **`GET /events/:id`**
    *   Fetches details for a specific event by its ID (e.g., `/events/finova`).
    *   Response: Single event object.

### Registration

*   **`POST /createregistration`**
    *   Creates a new registration for an event.
    *   Body:
        ```json
        {
          "eventName": "Event Title",
          "participantsName": ["Name 1", "Name 2"],
          "participantsEmail": ["email1@test.com", "email2@test.com"],
          "mobile": "1234567890",
          "college": "College Name",
          "course": "B.Tech",
          "city": "City Name"
        }
        ```

*   **`GET /registrations`**
    *   Fetches all registrations (Admin use).

## Database Seeding

To reset and populate the database with the default events:
```bash
node seedEvents.js
```
*Note: This will delete all existing events in the `events` collection and insert the default set.*
