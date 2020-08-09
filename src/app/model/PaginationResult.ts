export class PaginationResult{

    totalItems: number;
    data = [];
    totalPages: number;
    currentPage: number;

    constructor(){
        this.currentPage = 0;
    }
}