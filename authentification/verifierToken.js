import jwt from 'jsonwebtoken';

export const verifierToken = (req, res, next) => {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
        return res.status(401).json({ message: "Aucun token fourni, authentification refusée." });
    }

    // Extraire le token de la chaîne 'Bearer'
    const token = bearerToken.split(' ')[1];

    jwt.verify(token, process.env.CODE_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token invalide ou expiré." });
        }

        // Stocker l'ID utilisateur pour un usage ultérieur dans la requête
        req.userId = decoded.id;
        next();
    });
};
