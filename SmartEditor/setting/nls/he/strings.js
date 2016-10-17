define({
  "layersPage": {
    "title": "כן_Select a template to create features____________ש",
    "generalSettings": "כן_General Settings______ש",
    "layerSettings": "כן_Layer Settings_____ש",
    "editDescription": "כן_Provide display text for the edit panel_____________ש",
    "editDescriptionTip": "כן_This text is displayed above the Template picker, leave blank for no text_______________________ש.",
    "promptOnSave": "כן_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ש.",
    "promptOnSaveTip": "כן_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ש.",
    "promptOnDelete": "כן_Require confirmation when deleting a record______________ש.",
    "promptOnDeleteTip": "כן_Display a prompt when the user clicks delete to confirm the aciton_____________________ש.",
    "removeOnSave": "כן_Remove feature from selection on save____________ש.",
    "removeOnSaveTip": "כן_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ש.",
    "useFilterEditor": "כן_Use feature template filter_________ש",
    "useFilterEditorTip": "כן_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ש.",
    "layerSettingsTable": {
      "allowDelete": "כן_Allow Delete_____ש",
      "allowDeleteTip": "כן_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ש",
      "edit": "כן_Editable___ש",
      "editTip": "כן_Option to include the layer in the widget_____________ש",
      "label": "כן_Layer___ש",
      "labelTip": "כן_Name of the layer as defined in the map_____________ש",
      "update": "כן_Disable Geometry Editing________ש",
      "updateTip": "כן_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ש",
      "allowUpdateOnly": "כן_Update Only____ש",
      "allowUpdateOnlyTip": "כן_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ש",
      "fields": "כן_Fields___ש",
      "fieldsTip": "כן_Modify the fields to be edited and define Smart Attributes__________________ש",
      "description": "כן_Description____ש",
      "descriptionTip": "כן_Optionally enter text you want to display on top of the attribute page______________________ש."
    },
    "editFieldError": "כן_Field modifications and Smart attributes are not available to layers that are not editable____________________________ש"
  },
  "editDescriptionPage": {
    "title": "כן_Define attribute overview text for <b>${layername}</b>__________________ש "
  },
  "fieldsPage": {
    "title": "כן_Configure fields for <b>${layername}</b>_____________ש",
    "description": "כן_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ש.",
    "fieldsNotes": "כן_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ש.",
    "fieldsSettingsTable": {
      "display": "כן_Display___ש",
      "displayTip": "כן_Determine whether the field is not visible______________ש",
      "edit": "כן_Editable___ש",
      "editTip": "כן_Check on if the field is present in the attribute form_________________ש",
      "fieldName": "כן_Name__ש",
      "fieldNameTip": "כן_Name of the field defined in the database_____________ש",
      "fieldAlias": "כן_Alias___ש",
      "fieldAliasTip": "כן_Name of the field defined in the map____________ש",
      "canPresetValue": "כן_Preset___ש",
      "canPresetValueTip": "כן_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ש",
      "actions": "כן_Actions___ש",
      "actionsTip": "כן_Change the order of the fields or set up Smart Attributes__________________ש"
    },
    "smartAttSupport": "כן_Smart Attributes are not supported on required database fields____________________ש"
  },
  "actionPage": {
    "title": "כן_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ש",
    "description": "כן_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ש.",
    "actionsSettingsTable": {
      "rule": "כן_Action___ש",
      "ruleTip": "כן_Action performed when the criteria is satsified_______________ש",
      "expression": "כן_Expression____ש",
      "expressionTip": "כן_The resulting expression in SQL format from the defined criteria____________________ש",
      "actions": "כן_Criteria___ש",
      "actionsTip": "כן_Change the order of the rule and define the criteria when it is triggered_______________________ש"
    }
  },
  "filterPage": {
    "submitHidden": "כן_Submit attribute data for this field even when hidden_________________ש?",
    "title": "כן_Configure clause for the ${action} rule_____________ש",
    "filterBuilder": "כן_Set action on field when record matches ${any_or_all} of the following expressions__________________________ש",
    "noFilterTip": "כן_Using the tools below, define the statement for when the action is active_______________________ש."
  }
});