function login(req, res) {
  const user = req.body.user;
  const password = req.body.password;

  // TODO: Verify login credentials in database
  if (!user || !password) {
    return res.status(500).send("Missing credentials");
  }

  // TODO: initialize run with user information -> team, budget, etc
  res.status(200).json({ run: 1 });
}

module.exports = { login };
