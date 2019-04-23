/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

import sqldb from '../sqldb';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
    if (!config.seedDB) {
        return Promise.resolve();
    }

    let User = sqldb.User;
    let Category = sqldb.Category;
    let CategoryTool = sqldb.CategoryTool;
    let Tool = sqldb.Tool;
    let Product = sqldb.Product;
    let ProductTool = sqldb.ProductTool;
    let ProductUpdate = sqldb.ProductUpdate;

    let promises = [];

    CategoryTool.destroy({ where: {} });
    Category.destroy({ where: {} });
    
    ProductTool.destroy({ where: {} });
    Product.destroy({ where: {} });

    ProductUpdate.destroy({ where: {} });
    Tool.destroy({ where: {} });
    User.destroy({ where: {} });

    let user1 = User.build({
        provider: 'local',
        username: 'catalin.moldovan',
        email: 'test1@example.com',
        role: 'admin',
        password: 'test'
    });

    let user2 = User.build({
        provider: 'local',
        username: 'catalin.moldovan1',
        email: 'admin2@example.com',
        role: 'user',
        password: 'test'
    });

    let category1 = Category.build({
        name: 'DevOps',
        info: 'DevOps Tooling',
        active: true
    });

    let category2 = Category.build({
        name: 'Monitoring',
        info: 'Monitoring Tooling',
        active: true
    });

    let category3 = Category.build({
        name: 'Configuration Management',
        info: 'Configuration Management Tooling',
        active: true
    });

    let tool1 = Tool.build({
        name: 'Jenkins',
        description: 'Jenkins',
        info: '',
        active: true
    });

    let categoryTool1 = CategoryTool.build({ });

    let tool2 = Tool.build({
        name: 'Travis CI',
        description: '',
        info: '',
        active: true
    });

    let categoryTool2 = CategoryTool.build({ });

    let product1 = Product.build({
        name: '(Jenkins) Automatic Deploy',
        description: '',
        info: '',
        active: true
    });

    let productTool1 = ProductTool.build({ });

    let productUpdate1 = ProductUpdate.build({
        name: 'Update 2019',
        description: '',
        info: '',
        active: true
    });

    user1.save().then(pUser1 => {
        user2.save().then(pUser1 => {

        });
    });

    category1.save().then(pCategory1 => {
        category2.save().then(pCategory2 => {
            category3.save().then(pCategory3 => {
                tool1.save().then(pTool1 => {
                    categoryTool1.save().then(pCategoryTool1 => {
                        pCategory1.addCategoryTool(pCategoryTool1);
                        pTool1.addCategoryTool(pCategoryTool1);
                    });

                    product1.save().then(pProduct1 => {
                        productTool1.save().then(pProductTool1 => {
                            pProduct1.addProductTool(pProductTool1);
                            pTool1.addProductTool(pProductTool1);
                        });

                        productUpdate1.save().then(pProductUpdate1 => {
                            //pProduct1.addProductUpdate(pProductUpdate1);
                            pProduct1.addProdutUpdate(pProductUpdate1);
                        });
                    });

                });

                tool2.save().then(pTool2 => {
                    categoryTool2.save().then(pCategoryTool2 => {
                        pCategory1.addCategoryTool(pCategoryTool2);
                        pTool2.addCategoryTool(pCategoryTool2);
                    });
                });
            });
        });
    });

    /*
// Insert models below
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');
db.Category = db.sequelize.import('../api/category/category.model');
db.News = db.sequelize.import('../api/news/news.model');
db.Product = db.sequelize.import('../api/product/product.model');
db.ProductTool = db.sequelize.import('../api/product-tool/product-tool.model');
db.ProductUpdate = db.sequelize.import('../api/product-update/product-update.model');
db.Tool = db.sequelize.import('../api/tool/tool.model');
db.Tutorial = db.sequelize.import('../api/tutorial/tutorial.model');
db.TutorialChapter = db.sequelize.import('../api/tutorial-chapter/tutorial-chapter.model');
//*/

    return Promise.all(promises);
}