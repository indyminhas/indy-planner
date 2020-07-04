var currentDay = $("#currentDay")
var nine = $(".nineAm")
var ten = $(".tenAm")
var eleven = $(".elevenAm")
var twelve = $(".twelveAm")
var one = $(".onePm")
var two = $(".twoPm")
var three = $(".threePm")
var four = $(".fourPm")
var five = $(".fivePm")
var saveBtn = $(".saveBtn")
var checkBtn = $(".checkBtn")
var nineBtn = $(".nineBtn")
var tenBtn = $(".tenBtn")
var elevenBtn = $(".elevenBtn")
var twelveBtn = $(".twelveBtn")
var oneBtn = $(".oneBtn")
var twoBtn = $(".twoBtn")
var threeBtn = $(".threeBtn")
var fourBtn = $(".fourBtn")
var fiveBtn = $(".fiveBtn")


    // Global Arrays // 
var hours = [9,10,11,12,13,14,15,16,17]
var hoursElArray = [nine,ten,eleven,twelve,one,two,three,four,five]

    // Today's Date //
$(currentDay).text(moment().format("dddd, MMMM Do"))

    // Checking Past,Present,Future Hours For Class Additions //
var currentHour = moment().hour() 
for (let i = 0; i < 9; i++) {
    if (currentHour === hours[i]){
        $(hoursElArray[i]).addClass("present")
    } else if (currentHour > hours[i]) {
        $(hoursElArray[i]).addClass("past")
    } else {
        $(hoursElArray[i]).addClass("future")
    }
}

    // Retrieving And Populating To Page From LocalStorage //
$(window).on("load", function() {
    for (let i = 0; i < 9; i++) {
        var getData = localStorage.getItem("Note" + i)
        if (getData != null){
            $("#text" + i).text(getData)
        }
    }
});
    var nineNotes = localStorage.getItem("nineNotes")
    $(".nineAm").text(nineNotes)
    
    var tenNotes = localStorage.getItem("tenNotes")
    $(".tenAm").text(tenNotes)
    
    var elevenNotes = localStorage.getItem("elevenNotes")
    $(".elevenAm").text(elevenNotes)
    
    var twelveNotes = localStorage.getItem("twelveNotes")
    $(".twelveAm").text(twelveNotes)
    
    var oneNotes = localStorage.getItem("oneNotes")
    $(".onePm").text(oneNotes)
    
    var twoNotes = localStorage.getItem("twoNotes")
    $(".twoPm").text(twoNotes)
    
    var threeNotes = localStorage.getItem("threeNotes")
    $(".threePm").text(threeNotes)
    
    var fourNotes = localStorage.getItem("fourNotes")
    $(".fourPm").text(fourNotes)
    
    var fiveNotes = localStorage.getItem("fiveNotes")
    $(".fivePm").text(fiveNotes)
    
    

    // EventListeners For Saving To LocalStorage //
$(saveBtn).click(function(){
    var save = $("#text" + $(this).attr("id")).val()
    if (save.length){
        localStorage.setItem("Note" + $(this).attr("id"), save)
    }
});

    var nineData = $(this).siblings(".nineAm").val()
    var tenData = $(this).siblings(".tenAm").val();
    var elevenData = $(this).siblings(".elevenAm").val();
    var twelveData = $(this).siblings(".twelveAm").val();
    var oneData = $(this).siblings(".onePm").val();
    var twoData = $(this).siblings(".twoPm").val();
    var threeData = $(this).siblings(".threePm").val();
    var fourData = $(this).siblings(".fourPm").val();
    var fiveData = $(this).siblings(".fivePm").val();
    
    if(nineData !== undefined){
        localStorage.setItem("nineNotes", nineData)
    }
if(tenData !== undefined){
        localStorage.setItem("tenNotes", tenData)
    }
    if(elevenData !== undefined){
        localStorage.setItem("elevenNotes", elevenData)
     }
    if(twelveData !== undefined){
         localStorage.setItem("twelveNotes", twelveData)
     }
     if(oneData !== undefined){
         localStorage.setItem("oneNotes", oneData)
     }
     if(twoData !== undefined){
         localStorage.setItem("twoNotes", twoData)
     }
     if(threeData !== undefined){
         localStorage.setItem("threeNotes", threeData)
     }
     if(fourData !== undefined){
         localStorage.setItem("fourNotes", fourData)
     }
     if(fiveData !== undefined){
         localStorage.setItem("fiveNotes", fiveData)
     }    
    
    

    // EventListeners For Clearing From LocalStorage & Page //
    $(checkBtn).click(function(){
        localStorage.setItem("Note" + $(this).attr("data-id"), "")
        $("#text" + $(this).attr("data-id")).val(null)
    })

$(nineBtn).click(function(){
     nine.val("")
     localStorage.setItem("nineNotes", "")
 });
 $(tenBtn).click(function(){
     ten.val("")
     localStorage.setItem("tenNotes", "")
 });
 $(elevenBtn).click(function(){
     eleven.val("")
     localStorage.setItem("elevenNotes", "")
 });
 $(twelveBtn).click(function(){
     twelve.val("")
     localStorage.setItem("twelveNotes", "")
 });
 $(oneBtn).click(function(){
     one.val("")
     localStorage.setItem("oneNotes", "")
 });
 $(twoBtn).click(function(){
     two.val("")
     localStorage.setItem("twoNotes", "")
 });
 $(threeBtn).click(function(){
     three.val("")
     localStorage.setItem("threeNotes", "")
 });
 $(fourBtn).click(function(){
     four.val("")
     localStorage.setItem("fourNotes", "")
 });
 $(fiveBtn).click(function(){
     five.val("")
     localStorage.setItem("fiveNotes", "")
 });
  








