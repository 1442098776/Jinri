﻿function exeData(num, type) {
    loadData(num);
    loadpage();
}
function loadpage() {
    var myPageCount = parseInt($("#PageCount").val());
    var myPageSize = parseInt($("#PageSize").val());
    var countindex = myPageCount % myPageSize > 0 ? (myPageCount / myPageSize) + 1 : (myPageCount / myPageSize);
    $("#countindex").val(countindex);

    $.jqPaginator('#pagination', {
        totalPages: parseInt($("#countindex").val()),
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: 1,
        first: '<li class="first"><a href="javascript:;">home page</a></li>',
        prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>prev</a></li>',
        next: '<li class="next"><a href="javascript:;">next page<i class="arrow arrow3"></i></a></li>',
        last: '<li class="last"><a href="javascript:;">last page</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            if (type == "change") {
                exeData(num, type);
            }
        }
    });
}
$(function () {
    loadData(1);
    loadpage();
});