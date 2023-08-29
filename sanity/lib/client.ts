import { createClient } from "next-sanity"


export const client = createClient({
    projectId: "enzx19g0",
    dataset: "production",
    apiVersion: "2023-03-09",
    token: "skCFq9Si6ajNnR7ANGzgvVUMBzoibnMTnQqWj2Cn5XVLrRzGOjhIgH6e4eH17FKFOqsTX4Aso6TU59HoZuPAGc72BJCGN38kwkwlDxqJMzW6Q2jllEOBLqexWepTYpWR0ItMQHbIP1NwGAFeaLe3EjY2FEjj6a2ZcXrRwrrPcFSvlL7mIn8W"
})