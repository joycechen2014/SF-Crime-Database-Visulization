$(function () {
    var dialog, form;
    dialog = $("#dialog-form2").dialog({
        autoOpen: false,
        modal: true,
        close: function () { }
    });
    $(".btn-update").button().on('click', function () {
        dialog.dialog("open");
        // var countryname = $(this).parents("tr").find("td").eq(0).text();
        // var date = $(this).parents("tr").find("td").eq(1).text();
        // var type = $(this).parents("tr").find("td").eq(2).text();
        // var totalnum = $(this).parents("tr").find("td").eq(3).text();
        // var newnum = $(this).parents("tr").find("td").eq(4).text();
        // var id = $(this).parents("tr").find("td").eq(5).find('.btn-update').val();
        // $("input[name=countryname]").val(countryname);
        // $("input[name=date]").val(date);
        // $("input[name=type]").val(type);
        // $("input[name=totalnumber]").val(totalnum);
        // $("input[name=newnumber]").val(newnum);
        // $("input[name=id]").val(id);

        var innum = $(this).parents("tr").find("td").eq(0).text();
        var categ = $(this).parents("tr").find("td").eq(1).text();
        var dayof = $(this).parents("tr").find("td").eq(2).text();
        var date = $(this).parents("tr").find("td").eq(3).text();
        var time = $(this).parents("tr").find("td").eq(4).text();
        var pddis = $(this).parents("tr").find("td").eq(5).text();
        var resol = $(this).parents("tr").find("td").eq(6).text();
        var addre = $(this).parents("tr").find("td").eq(7).text();
        var id = $(this).parents("tr").find("td").eq(8).find('.btn-update').val();
        $("#dialog-form2 input[name=incidntnum]").val(innum);
        $("#dialog-form2 input[name=category]").val(categ);
        $("#dialog-form2 input[name=dayofweek]").val(dayof);
        $("#dialog-form2 input[name=date]").val(date);
        $("#dialog-form2 input[name=time]").val(time);
        $("#dialog-form2 input[name=pddistrict]").val(pddis);
        $("#dialog-form2 input[name=resolution]").val(resol);
        $("#dialog-form2 input[name=address]").val(addre);
        $("#dialog-form2 input[name=id]").val(id);
    });
})