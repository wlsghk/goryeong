$(function () {
    $("#ntFlie1, #ntFile2, #ntFile3, #ntFile4, #ntFile52").on('change', function () {
        const fileName1 = $("#ntFlie1").val();
        const fileName2 = $("#ntFile2").val();
        const fileName3 = $("#ntFile3").val();
        const fileName4 = $("#ntFile4").val();
        const fileName5 = $("#ntFile5").val();
        $(".upload-file_01").val(fileName1);
        $(".upload-file_02").val(fileName2);
        $(".upload-file_03").val(fileName3);
        $(".upload-file_04").val(fileName4);
        $(".upload-file_05").val(fileName5);
    });
});