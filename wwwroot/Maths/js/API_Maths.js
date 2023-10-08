const API_URL = "http://localhost:5000/api/Maths";

function API_DisplayMaths() {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL,
            success: contacts => { currentHttpError = ""; resolve(contacts); },
            error: (xhr) => { console.log(xhr); resolve(null); }
        });
    });
}
function API_GetContact(contactId) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL + "/" + contactId,
            success: contact => { currentHttpError = ""; resolve(contact); },
            error: (xhr) => { currentHttpError = xhr.responseJSON.error_description; resolve(null); }
        });
    });
}