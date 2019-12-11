const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Local', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};


controller.listProductos = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Producto', (err, products) => {
     if (err) {
      res.json(err);
     }
     res.render('products', {
        datas: products
     });
    });
  });
};






controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO Local set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};



controller.saveProductos=(req, res) =>{
  const datas =req.body;
  req.getConnection((err,conn)=>{
      conn.query('INSERT INTO Producto set ? ', datas , (err,customer) =>{
        console.log(datas);
        res.redirect('/listProductos');
      });
  });
};






controller.edit = (req, res) => {
  const { IdLocal } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Local WHERE IdLocal = ?", [IdLocal], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { IdLocal } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE Local set ? where IdLocal = ?', [newCustomer, IdLocal], (err, rows) => {
    res.redirect('/');
  });
  });
};




controller.delete = (req, res) => {
  const { IdLocal } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Local WHERE IdLocal = ?', [IdLocal], (err, rows) => {
      res.redirect('/');
    });
  });
}

controller.deleteProductos = (req, res) => {
  const { IdProducto } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Producto WHERE IdProducto = ?', [IdProducto], (err, rows) => {
      res.redirect('/listProductos');
    });
  });
}

controller.editproductos = (req, res) => {
  const { IdProducto } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Producto WHERE IdProducto = ?", [IdProducto], (err, rows) => {
      console.log(rows);
      res.render('products_edit', {
        datas: rows[0]
        
      })
      console.log('Ya paso 1');
    });
  });
};

controller.updateproductos = (req, res) => {
  const { IdProducto } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE Producto set ? where IdProducto = ?', [newCustomer, IdProducto], (err, rows) => {
    console.log(rows);
    res.redirect('products_edit');
    console.log('Ya paso 2');
  });
  });
};



module.exports = controller;
