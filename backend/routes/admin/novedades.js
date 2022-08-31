var express = require('express');
const session = require('express-session');
const { rawListeners } = require('../../models/bd');
var router = express.Router();
var novedadesModel = require("../../models/novedadesModels")


router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', async function (req, res, next) {
    res.render('admin/agregar', {
    });
});


router.post("/agregar", async (req, res, next) => {
    try {
        if (req.body.name != "" && req.body.class != "") {
            await novedadesModel.insertNovedades(req.body);
            res.redirect("/admin/novedades")
        } else {
            res.render("admin/agregar", {
                error: true,
                message: "All fields are required"
            })
        }
    } catch (error) {
        console.log(error);
        res.render("admin/agregar", {
            error: true, message: "need to enter the name"
            
        });

    };
});

router.get("/eliminar/:id", async(req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect("/admin/novedades")
});

router.get("/modificar/:id", async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadesByid(id);
    res.render("admin/modificar",{
        novedad
    });
});

router.post("/modificar", async (req, res, next) => {
    try{
        let obj = {
            name: req.body.name,
            class: req.body.class
        }

        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect("/admin/novedades");
    }
    catch (error) {
        console.log(error)
        res.render("admin/modificar",{
            error:true, message: "no se modifico"
        })
    }
})

module.exports = router;