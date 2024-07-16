import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const createUser = (req, res) => {
    const { full_name, dateBirth, email, password } = req.body;
    const q = "INSERT INTO users ( full_name, dateBirth, email, password) VALUES ( ?, ?, ?, ?)";
    const values = [full_name, dateBirth, email, password];

    db.query(q, values, (err, result) => {
        if (err) {
            console.error("Erro ao criar usuário:", err);
            return res.status(500).json({ error: "Erro interno ao criar usuário" });
        }

        console.log("Usuário criado:", { id: result.insertId, full_name, dateBirth, email });
        return res.status(201).json({ id: result.insertId, full_name, dateBirth, email });
    });
};


// (----------------------------------------------------------------------------------------------------------------)


