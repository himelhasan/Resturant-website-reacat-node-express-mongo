import { fetch } from "wix-fetch";

// Function to generate a random ticket code
function generateTicketCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 10; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Function to save the generated ticket code to Firebase

function saveTicketCodeToFirebase(ticketCode, ticketType) {
  const ticketData = {
    gameID: 0, // Add any other relevant game-related info here
    n: ticketType === "single" ? 1 : 6, // 'n' is 1 for single tickets, 6 for family tickets
  };

  console.log("Saving ticket to Firebase:", ticketCode, ticketData);

  return fetch(
    `https://shadow-tale-default-rtdb.firebaseio.com/keys/${ticketCode}.json`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticketData),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Firebase save failed with status: ${response.status}`);
      }
      console.log("Ticket successfully saved to Firebase:", ticketCode);
      return response.json();
    })
    .catch((error) => {
      console.error("Error saving ticket to Firebase:", error);
    });
}

// Function to trigger the custom event and send the ticket code email using Wix Fetch
export function sendTicketCode(ticketType, contactId) {
  // Generate a new ticket code
  const newTicketCode = generateTicketCode();
  console.log(newTicketCode);
  // Save the ticket code to Firebase, then trigger the automation
  return saveTicketCodeToFirebase(newTicketCode, ticketType)
    .then(() => {
      const automationUrl = "https://www.wixapis.com/automations/v1/custom-events";

      // Trigger the custom event through Wix Fetch
      return fetch(automationUrl, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjQ0YTczMGI2LWY0NmUtNDJhNi04ZGIxLTE4ZGE4MzVmM2JlNlwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcImRlMmQxY2I1LTVhM2MtNGI1Zi1hOTMxLWFiNTZhMmFmM2QxM1wifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCI4MDgwMGYwMy1kNGVhLTRmOWUtOWM0ZC1lMTAzZTg1MGVjZmZcIn19IiwiaWF0IjoxNzI3NjMyMjI1fQ.aRub52c34sp6Xb1BXZ8EhvuWl3D5Izd4ripbZg6ApIwDG5-zEMoHyhyDRKFigMsnxAcRr2PVWD92lK5t5TI8DtkDk8tEidwChcXxqyOB8Rtg2og2TnZgj0ZlQIHGccVjKWfYr_JEzxPJdSn5sT5LdEHqROsjyAbGIkY-nAfAAoSIAv_qOnAzuuKajca1dgFBfetabGdtihcOWkof2H4KnDasDXqnbaM81KoUrRf54LGg76E9U8bHVkFefNdjC0nCp1JdaatSlnh9nb_hEyVfGuNxjFkRhKbu_OShr2YF_RVEDnfXT6NYhR7jLkxNQRhm1GixdH1QaPKSuA2YK_Uz5w", // Replace with your actual API key
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName: "TicketCodeSent", // Your custom event name
          contactId: contactId, // The buyer's contact ID
          payload: { ticketCode: newTicketCode }, // The actual ticket code to send
        }),
      });
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Automation triggered successfully:", data);
    })
    .catch((error) => {
      console.error("Error saving ticket or triggering email:", error);
    });
}
