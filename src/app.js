const express = require("express");
const cors = require("cors");
const path = require("path");

const casesRoutes = require("./routes/cases.routes");
const evidenceRoutes = require("./routes/evidence.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ ok: true, service: "GEvidence Mongo API" });
});

app.use("/cases", casesRoutes);
app.use("/evidence", evidenceRoutes);

app.use(errorHandler);

module.exports = app;