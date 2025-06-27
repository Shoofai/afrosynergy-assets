// ThentyHelpers.js — AfroSynergy custom fallback

function fetchUserData() {
  try {
    // Adjust this key if Thenty uses a different localStorage name
    const raw = localStorage.getItem("thenty-user-data") || "{}"
    const userData = JSON.parse(raw)
    const loggedIn = Boolean(userData?.name && userData?.email)
    return { userData, loggedIn }
  } catch (e) {
    console.error("Failed to fetch Thenty user data", e)
    return { userData: {}, loggedIn: false }
  }
}

// Optional: make available globally
window.fetchUserData = fetchUserData
