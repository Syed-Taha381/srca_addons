setTimeout(function () {
    //do something special
    $("#toolbar-help").html(`
            <li><a href="mailto:info@srca.com.pk">Report Issue</a></li>
            <li><a onclick="return frappe.ui.toolbar.show_about();">About</a></li>
            `);
}, 2000);

frappe.ui.misc.about = function () {
    if (!frappe.ui.misc.about_dialog) {
        var d = new frappe.ui.Dialog({ title: __("Accountezz Pro") });
        $(d.body).html(`
        <div>
        <p>A complete business solution</p>
        <p>Email: <a href="mailto:info@srca.com.pk">info@srca.com.pk</a></p>
        <p>Website: <a href="http://srca.com.pk" target="_blank">srca.com.pk</a></p>
        <p>Tel: +92 21-34916144</p>
        <p>Cell: +92-309-5551161</p>
        <p>Plot No. 18/103, G-1, Block-3, K.M.C.H.S, Alamgir Road, Karachi</p>
        <hr>
        <a href="http://havenir.com" target="_blank"><p class='text-muted'>&copy; Havenir Solutions Pvt. Ltd</p></a>
        </div>
        `);
        frappe.ui.misc.about_dialog = d;
        d.show();
    } else {
        frappe.ui.misc.about_dialog.show();
    }
};
