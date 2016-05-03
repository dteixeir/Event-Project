
/*$(':input').focusout(function(eventStuff) {
        switch(this.id)
        {
            case 'eName' : 
                var eName = document.querySelector('#eName');

                if(eName.value.length == 0 || !/^[a-zA-Z\s]*$/g.test(eName.value))
                {
                    $('#eName').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                    eName.setCustomValidity("Please enter an event name");
                }
                else
                {
                    $('#eName').removeClass( "glowing-border-wrong" ).addClass('glowing-border-correct');
                    eName.setCustomValidity("");
                }

                break;

            case 'eType' : 
                var eType = document.querySelector('#eType');

                if(eType.value.length == 0 || !/^[a-zA-Z\s]*$/g.test(eType.value))
                {
                    $('#eType').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                    eType.setCustomValidity("Please enter and event type");
                }
                else
                {
                    $('#eType').removeClass( "glowing-border-wrong" ).addClass('glowing-border-correct');
                    eType.setCustomValidity("");
                }

                break;

            case 'eHost' : 
                var eHost = document.querySelector('#eHost');

                if(eHost.value.length == 0 || !/^[a-zA-Z\s]*$/g.test(eHost.value))
                {
                    $('#eHost').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                    eHost.setCustomValidity("Please enter a host");
                }
                else
                {
                    $('#eHost').removeClass( "glowing-border-wrong" ).addClass('glowing-border-correct');
                    eHost.setCustomValidity("");
                }

                break;

            case 'autocomplete' : 
                var eLocation = document.querySelector('#autocomplete');

                if(eLocation.value.length == 0)
                    $('#autocomplete').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                else
                    $('#autocomplete').removeClass( "glowing-border-wrong" ).addClass('glowing-border-correct');

                break;
        }
    });

$(':input').change(function(eventStuff) {
    switch(this.id)
    {
        case 'eStartDate' : 
            var eStartDate = document.querySelector('#eStartDate');
            var now = new Date();
            now.setHours(0,0,0,0);
            var futureDate = new Date(eStartDate.value);

            if(eStartDate.value.length == 0 )
            {
                $('#eStartDate').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                eStartDate.setCustomValidity("Please enter a date");
            }
            else if (futureDate < now)
            {
                $('#eStartDate').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong'); 
                eStartDate.setCustomValidity("Please enter a future date");
            }
            else
            {
                $('#eStartDate').removeClass( "glowing-border-wrong" ).addClass('glowing-border-correct');
                eStartDate.setCustomValidity("");
            }
            //break;

        case 'eEndDate' : 
            var eEndDate = document.querySelector('#eEndDate');
            var eStartDate = document.querySelector('#eStartDate');

            var eDate = new Date(eEndDate.value);
            var sDate = new Date(eStartDate.value);

            if(eEndDate.value.length == 0)
            {
                $('#eEndDate').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                eEndDate.setCustomValidity("Please enter a date");
            }
            else if( sDate > eDate)
            {
                $('#eEndDate').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                eEndDate.setCustomValidity("Select a date after the start date");
            }
            else
            {
                $('#eEndDate').removeClass( "glowing-border-wrong" ).addClass('glowing-border-correct');
                eEndDate.setCustomValidity("");
            }

            //break;

        case 'eStartTime' : 
            var eStartTime = document.querySelector('#eStartTime');
            if(eStartTime.value.length == 0)
            {
                $('#eStartTime').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                eStartTime.setCustomValidity("Select a start time");
            }
            else
            {
                $('#eStartTime').removeClass( "glowing-border-wrong" ).addClass('glowing-border-correct');
                eStartTime.setCustomValidity("");
            }

            //break;

        case 'eEndTime' : 
            var eEndTime = document.querySelector('#eEndTime');

            if(eEndTime.value == 0)
            {
                $('#eEndTime').removeClass( "glowing-border-correct" ).addClass('glowing-border-wrong');
                eEndTime.setCustomValidity("Select an end time");
            }
            else
            {
                $('#eEndTime').removeClass( "glowing-border-wrong" ).addClass('glowing-border-correct');
                eEndTime.setCustomValidity("");
            }

            break;
    }
});

function CheckValid ()
{
    var count = 0;

    $.each($(':input'), function (index, value){
        if($(value).hasClass("glowing-border-correct"))
            count += 1;
    });

    if(count == 8)
        return true;
    else 
        return false;
};





*/