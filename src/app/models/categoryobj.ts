export class CategoryObj{
    categoryId:number;
    categoryName:string;
    parentCategoryId:number;
    userId:string;

    constructor(categoryId: number,
        categoryName:string,
        parentCategoryId:number,
        userId:string,){
            this.categoryId = categoryId;
            this.categoryName = categoryName;
            this.parentCategoryId = parentCategoryId;
            this.userId = userId;
    }
}