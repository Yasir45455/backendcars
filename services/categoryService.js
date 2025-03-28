const CategoryRepository = require('../repositories/categoryRepository');

class CategoryService {
  static async createCategory(data) {
    if (!data.admin) {
      throw new Error('Error');
    }
   
    return CategoryRepository.createCategory(data);
  }
  
  static async getAllCategories() {
    return CategoryRepository.getAllCategories();
  }

  static async getCategoryByName(categoryName) {
    return CategoryRepository.getCategoryByName(categoryName);
  }

  static async updateCategory(id, data) {
    return CategoryRepository.updateCategory(id, data);
  }

  static async deleteCategory(id) {
    return CategoryRepository.deleteCategory(id);
  }
}

module.exports = CategoryService;
