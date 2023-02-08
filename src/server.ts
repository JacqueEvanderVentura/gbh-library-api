import { app } from "./app";

import "./database/connect";

const port = app.get("port");

app.listen(port, () => console.log("Library API on port: " + port));
