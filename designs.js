function makeGrid(){
    var height, width,color,  canvas, canvasCell;

    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    canvas= $('#pixelCanvas');

    // to clear the table
    canvas.children().remove();

    //To dynamically add table row base on width
    for (let x =1; x <= height; x++) {
    canvas.append('<tr></tr>');
    }
        canvasCell=$('tr');

    //To dynamically add table colum base on widths
    for(let y = 1; y <= width; y++){
        canvasCell.append('<td></td>');
    }
      assign=canvas.find('td');

    //to set the color picked
    assign.click(function(){
        color = $('#colorPicker').val();
        $(this).css('background-color',color);
    });

}
var submit;

$(document).ready(function(){
    submit = $('input[type="submit"]');
    
    submit.click(function(event) {
         event.preventDefault();
         makeGrid();
    });

});
