function init() {
    $('.stroke-width-label').html($('.stroke-width').val())
}

function onStrokeWidthChange(elRange) {
    $('.stroke-width-label').html(elRange.value)
}

