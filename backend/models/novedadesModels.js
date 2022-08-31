var pool  = require('./bd');


async function getNovedades(){
    var query = "select * from alumns";
    var rows = await pool.query(query)
    return rows;
}

async function insertNovedades(obj){
    try{
        var query = "insert into alumns set ?";
        var rows = await pool.query(query,[obj])
        return rows;
        
    }catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadesById(id) {
    var query ="delete from novedades whre id = ?";
    var rows = await pool.query(query,[id]);
    return rows;
}

async function getNovedadesByid(id) {
    var query ="select * from novedades where id = ?";
    var rows = await pool.query(query,[id]);
    return rows [0];
}

async function modificarNovedadById(obj, id) {
    try{
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }

}

module.exports = {getNovedades, insertNovedades, deleteNovedadesById, getNovedadesByid, modificarNovedadById}