function escapeRegexChar(pChar) {
    specialCharsList = ['*', '(', ')', '$', '+', '?', '[', ']', '.', '\\', '^', '|'];

    if (specialCharsList.includes(pChar)) {
        pChar = '\\' + pChar;
    }

    return pChar;
}

function encode(inText, dictReplace) {
	let outText = inText;

	for (const key in dictReplace) {
		outText = outText.replace(new RegExp(escapeRegexChar(key), 'g'), dictReplace[key]);
	}

	return (outText)
}

function decode(inText, dictReplace) {
    let outText = inText;

    for (const key in dictReplace) {
		outText = outText.replace(new RegExp('\\' + dictReplace[key], 'g'), key);
    }

    return (outText);
}

$(function () {

	let inEl =  $('textarea#in_text');
	let outEl =  $('textarea#out_text');

	inEl.focus();
	$('button#encode').click(() => {
		outEl.val(encode(inEl.val(), g_dictReplace));
		outEl.select();
	});

	$('button#decode').click(() => {
		outEl.val(decode(inEl.val(), g_dictReplace));
		outEl.select();
	});

	$('button#focus_looper').focus(() => {
		inEl.focus();
	});

	inEl.focus(() => {
		inEl.select();
	});
});
