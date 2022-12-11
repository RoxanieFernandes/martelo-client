import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://martelo.cyclic.app/",
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error) => { 
        throw(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          window.location = "/login"; //arrumar para nao atualizar (context.api)
        }
        throw error;
      }
    );
  }

  signup = async (signupInfo) => {
    try {
      await this.api.post("/signup", signupInfo);
    } catch (error) {
      throw error.response.data.message;
    }
  };

  login = async (loginInfo) => {
    try {
      const { data } = await this.api.post("/login", loginInfo);
      localStorage.setItem("token", data.token);
    } catch (error) {
      throw error;
    }
  };

  createProduct = async (newProduct) => {
    try {
      const { data } = await this.api.post("/product", newProduct);
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };

  getProducts = async () => {
    try {
      const { data } = await this.api.get("/product/");
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };

  getUserProducts = async () => {
    try {
      const { data } = await this.api.get("/user/product");
      return data;
    } catch (error) {
      throw error.response.data.message;
    }
  };

  //   updateProducts = async (id, userId) => {
  //     try {
  //         await this.api.put('/product/${id}')
  //       } catch (error) {
  //         throw error.response.data.message
  //       }
  //   }
}

export default new Api();
