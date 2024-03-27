// Copyright (c) 2024, akshay and contributors
// For license information, please see license.txt

// frappe.ui.form.on("job Apply", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Job Apply', {
    refresh: function(frm) {
        if (!frm.is_new()) {
            frm.trigger('mgs_fun');
        }
    },

    mgs_fun: function(frm) {
        frappe.msgprint(__('Your data has been saved'));
    },

    role: function(frm) {
        // Clear previous values
        clearFields(frm);

        // Get the selected role
        
        var role = frm.doc.role;


        // Show fields based on role
        if (role === 'Developer') {
            showDeveloperFields(frm);
        } else if (role === 'QA') {
            showQAFields(frm);
        } else if (role === 'Graphic Designer') {
            showDesignerFields(frm);
        }

    }

});


function clearFields(frm) {
    
    frm.fields_dict.language.set_input('');
    frm.fields_dict.ides.set_input('');
    frm.fields_dict.applied_date.set_input('');
    frm.fields_dict.bug_tracking_system.set_input('');
    frm.fields_dict.automation_experience.set_input('');
    frm.fields_dict.test_environments.set_input('');
    frm.fields_dict.design_style.set_input('');
    frm.fields_dict.color_theory_knowledge.set_input('');
    frm.fields_dict.typography_skills.set_input('');
    frm.fields_dict.ui_ux_experience.set_input('');
}

function showDeveloperFields(frm) {
    frm.fields_dict.language.set_df_property('hidden', 0);
    frm.fields_dict.ides.set_df_property('hidden', 0);
    frm.fields_dict.applied_date.set_df_property('hidden', 0);
}

function showQAFields(frm) {
    frm.fields_dict.bug_tracking_system.set_df_property('hidden', 0);
    frm.fields_dict.automation_experience.set_df_property('hidden', 0);
    frm.fields_dict.test_environments.set_df_property('hidden', 0);
}

function showDesignerFields(frm) {
    frm.fields_dict.design_style.set_df_property('hidden', 0);
    frm.fields_dict.color_theory_knowledge.set_df_property('hidden', 0);
    frm.fields_dict.typography_skills.set_df_property('hidden', 0);
    frm.fields_dict.ui_ux_experience.set_df_property('hidden', 0);
}
