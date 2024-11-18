$('#empty1').css('display', 'none');
$('#empty1').css('visibility', 'hidden');
$x = 0;
$('#listul').click(function () {
    if ($x == 0) {
        $('#listing').css('display', 'block');
        $('#listing').css('visibility', 'visible');
        $('.fa-angles-right').css('transform', 'rotate(-90deg)');
        $x = 1;
    }else{
        $('#listing').css('display', 'none');
        $('#listing').css('visibility', 'hidden');
        $('.fa-angles-right').css('transform', 'rotate(90deg)');
        $x = 0;
    }
});