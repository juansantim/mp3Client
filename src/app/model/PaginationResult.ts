export class PaginationResult {

    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    data = [];

    constructor() {
        this.currentPage = 0;
        this.totalPages = 0;
        this.pageSize = 10;
        this.data = []
    }
}