const { Router } = require("express");
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
} = requiere("../controllers/usuarios");

const router = Router();

//localhost:3001/usuarios
router.get("/", usuariosGet)
router.post("/", usuariosPost)
router.put("/", usuariosPut)
router.delete("/", usuariosDelete)
router.post("/signin/", usuarioSignIn)

module.exports = router;
