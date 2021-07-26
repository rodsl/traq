const axios = require ("axios").default;

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.cre({
  baseURL: "https://prod-27.westus.logic.azure.com:443/workflows/37e64728c8f44161a3159ceb9324009e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vFYBO9bZESS9VPQbD53qK4PU-C2ge7F6OxYsBqzXwv",
});

module.exports = api;