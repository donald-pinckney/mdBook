"use strict";
window.editors = [];
(function(editors) {
    if (typeof(ace) === 'undefined' || !ace) {
        return;
    }

    Array.from(document.querySelectorAll('.editable')).forEach(function(editable) {
        let editor = ace.edit(editable);
        editor.setOptions({
            highlightActiveLine: false,
            showPrintMargin: false,
            showLineNumbers: false,
            showGutter: false,
            maxLines: Infinity,
            fontSize: "0.875em" // please adjust the font size of the code in general.css
        });

        editor.$blockScrolling = Infinity;

        // editor.originalCode = editor.getValue();

        editors.push(editor);
    });
})(window.editors);
