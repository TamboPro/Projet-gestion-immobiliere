const role = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Accès interdit - Rôle non autorisé' });
    }
    next();
  };
};

module.exports = role;