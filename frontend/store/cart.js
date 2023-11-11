// store/cart.js
export const namespaced = true;

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  setCartItems(state, items) {
    state.cartItems = items;
  },
};

export const actions = {
  async fetchCartItems({ commit }) {
    try {
      const response = await this.$http.get('/api/cart');
      commit('setCartItems', response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  },

  async addToCart({ dispatch }, { productId, quantity }) {
   // alert("test...");

    try {
      await this.$http.post('/api/cart/add', { productId, quantity });
      dispatch('fetchCartItems');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  },

  async removeFromCart({ dispatch }, productId) {
    try {
      await this.$http.post('/api/cart/remove', { productId });
      dispatch('fetchCartItems');
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  },

  async updateCartItem({ dispatch }, { productId, quantity }) {
    try {
      await this.$http.post('/api/cart/update', { productId, quantity });
      dispatch('fetchCartItems');
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  },
};
