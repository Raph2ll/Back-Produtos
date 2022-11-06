const app = require('../api/app')
const request = require('supertest')

describe("Products", () =>  {
  describe("Post products", () => {
    it("should be able to create a new product", async () => {
      const response = await request(app)
      .post('/products')
      .send({
          name: "bicicleta",
          price: "7,50",
          stock: "200",
          description: "verdes",
        });
  
      expect(response.status).toBe(201);
      expect(response.body).not.toBeNull();
      expect(response.body.name).toBe("bicicleta")
    });
    it("shouldn't be able to create a new product", async () => {
      const response = await request(app)
      .post('/products')
      .send({
          name: "",
          price: "7,50",
          stock: "200",
          description: "verdes",
        });
  
      expect(response.status).toBe(400);
      expect(response.body).toBe("\"name\" is not allowed to be empty");
    });
  });
  
  describe("Get products", () =>  {
    it("should be able to get all product", async () => {
      const response = await request(app)
      .get('/products')
  
      expect(response.status).toBe(200);
    });
    it("shouldn't be able to get a product by non-existent id", async () => {
      const response = await request(app)
      .get('/products/1')
  
      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Entrie not found")
    });
    it("should be able to get a product by id", async () => {
      const product = await request(app)
        .post('/products')
        .send({
            name: "revista",
            price: "222",
            stock: "222",
            description: "Avon",
          });

        const result = product.body;

      const response = await request(app)
        .get(`/products/${result._id}`);

      expect(response.status).toBe(200);
    });  
  });

  describe("Delete product", () =>  {
    it("should be able to remove a product", async () => {
      const product = await request(app)
        .post('/products')
        .send({
            name: "revista",
            price: "222",
            stock: "222",
            description: "Avon",
          });

        const result = product.body;

        const response = await request(app)
        .delete(`/products/${result._id}`);

      expect(response.status).toBe(204);
    });
  });

  describe("Put product", () =>  {
    it("shouldn't be able to update a product", async () => {
      const product = await request(app)
        .post('/products')
        .send({
            name: "revista",
            price: "222",
            stock: "222",
            description: "Avon",
          });

        const result = product.body;

        const response = await request(app)
        .put(`/products/${result._id}`);

      expect(response.status).toBe(400);
    });

    it("should be able to update a product", async () => {
      const product = await request(app)
        .post('/products')
        .send({
            name: "revista",
            price: "222",
            stock: "222",
            description: "Avon",
          });

        const result = product.body;

        const response = await request(app)
        .put(`/products/${result._id}`)
        .send({
          name: "livro",
          price: "222",
          stock: "222",
          description: "Avon",
        });

      expect(response.status).toBe(200);
    });
  });
});
