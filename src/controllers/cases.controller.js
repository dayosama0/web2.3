const VerificationCase = require("../models/VerificationCase");

async function getAllCases(req, res) {
  const cases = await VerificationCase.find().sort({ createdAt: -1 });
  res.json(cases);
}

async function getCaseById(req, res) {
  const item = await VerificationCase.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "VerificationCase not found." });
  res.json(item);
}

async function createCase(req, res) {
  const created = await VerificationCase.create(req.body);
  res.status(201).json(created);
}

async function updateCase(req, res) {
  const updated = await VerificationCase.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!updated) return res.status(404).json({ error: "VerificationCase not found." });
  res.json(updated);
}

async function deleteCase(req, res) {
  const deleted = await VerificationCase.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: "VerificationCase not found." });
  res.json({ success: true });
}

module.exports = { getAllCases, getCaseById, createCase, updateCase, deleteCase };