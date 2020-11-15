/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


function ValidateEmail(email)
{
 return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}


function ValidateForm(name, email, field, occupation, qualification, institution) {

    if (name.value === "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value === "" && ValidateEmail(email.value)) {
        window.alert("Please enter a valid email address.");
        email.focus();
        return false;
    }
    if (field.value === "") {
        window.alert("Please enter your field of expertise.");
        field.focus();
        return false;
    }

    if (occupation.value === "") {
        window.alert(
            "You missed your current or most recent occupation!");
        occupation.focus();
        return false;
    }

    if (qualification.value === "") {
        window.alert("Please enter your highest academic qualification achieved.");
        password.focus();
        return false;
    }

    if (institution.value === "") {
        window.alert("Please enter your most recent institution.");
        what.focus();
        return false;
    }

    return true;
}


function SendFormEmail() {
    var name = document.forms["RegForm"]["name"];
    var email = document.forms["RegForm"]["email"];
    var field = document.forms["RegForm"]["field"];
    var occupation = document.forms["RegForm"]["occupation"];
    var qualification = document.forms["RegForm"]["qualification"];
    var institution = document.forms["RegForm"]["institution"];

    if (validate_form(name, email, field, occupation, qualification, institution)) {
        var email_body = name.value + " , " + email.value + " , " + field.value + " , " + occupation.value + " , " + qualification.value + " , " + institution.value
        Email.send({
            SecureToken: "a44948a8-9f25-42a8-ab50-277628fbb857",
            To: 'extended@extend.education',
            From: "smtp@smtp.mail",
            Subject: "Another sign-up!",
            Body: email_body
        }).then(
            message => alert(message)
        );
    }
}

