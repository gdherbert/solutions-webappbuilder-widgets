define({
  "layersPage": {
    "title": "Đ_Select a template to create features____________ớ",
    "generalSettings": "Đ_General Settings______ớ",
    "layerSettings": "Đ_Layer Settings_____ớ",
    "editDescription": "Đ_Provide display text for the edit panel_____________ớ",
    "editDescriptionTip": "Đ_This text is displayed above the Template picker, leave blank for no text_______________________ớ.",
    "promptOnSave": "Đ_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ớ.",
    "promptOnSaveTip": "Đ_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ớ.",
    "promptOnDelete": "Đ_Require confirmation when deleting a record______________ớ.",
    "promptOnDeleteTip": "Đ_Display a prompt when the user clicks delete to confirm the aciton_____________________ớ.",
    "removeOnSave": "Đ_Remove feature from selection on save____________ớ.",
    "removeOnSaveTip": "Đ_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ớ.",
    "useFilterEditor": "Đ_Use feature template filter_________ớ",
    "useFilterEditorTip": "Đ_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ớ.",
    "layerSettingsTable": {
      "allowDelete": "Đ_Allow Delete_____ớ",
      "allowDeleteTip": "Đ_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ớ",
      "edit": "Đ_Editable___ớ",
      "editTip": "Đ_Option to include the layer in the widget_____________ớ",
      "label": "Đ_Layer___ớ",
      "labelTip": "Đ_Name of the layer as defined in the map_____________ớ",
      "update": "Đ_Disable Geometry Editing________ớ",
      "updateTip": "Đ_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ớ",
      "allowUpdateOnly": "Đ_Update Only____ớ",
      "allowUpdateOnlyTip": "Đ_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ớ",
      "fields": "Đ_Fields___ớ",
      "fieldsTip": "Đ_Modify the fields to be edited and define Smart Attributes__________________ớ",
      "description": "Đ_Description____ớ",
      "descriptionTip": "Đ_Optionally enter text you want to display on top of the attribute page______________________ớ."
    },
    "editFieldError": "Đ_Field modifications and Smart attributes are not available to layers that are not editable____________________________ớ"
  },
  "editDescriptionPage": {
    "title": "Đ_Define attribute overview text for <b>${layername}</b>__________________ớ "
  },
  "fieldsPage": {
    "title": "Đ_Configure fields for <b>${layername}</b>_____________ớ",
    "description": "Đ_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ớ.",
    "fieldsNotes": "Đ_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ớ.",
    "fieldsSettingsTable": {
      "display": "Đ_Display___ớ",
      "displayTip": "Đ_Determine whether the field is not visible______________ớ",
      "edit": "Đ_Editable___ớ",
      "editTip": "Đ_Check on if the field is present in the attribute form_________________ớ",
      "fieldName": "Đ_Name__ớ",
      "fieldNameTip": "Đ_Name of the field defined in the database_____________ớ",
      "fieldAlias": "Đ_Alias___ớ",
      "fieldAliasTip": "Đ_Name of the field defined in the map____________ớ",
      "canPresetValue": "Đ_Preset___ớ",
      "canPresetValueTip": "Đ_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ớ",
      "actions": "Đ_Actions___ớ",
      "actionsTip": "Đ_Change the order of the fields or set up Smart Attributes__________________ớ"
    },
    "smartAttSupport": "Đ_Smart Attributes are not supported on required database fields____________________ớ"
  },
  "actionPage": {
    "title": "Đ_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ớ",
    "description": "Đ_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ớ.",
    "actionsSettingsTable": {
      "rule": "Đ_Action___ớ",
      "ruleTip": "Đ_Action performed when the criteria is satsified_______________ớ",
      "expression": "Đ_Expression____ớ",
      "expressionTip": "Đ_The resulting expression in SQL format from the defined criteria____________________ớ",
      "actions": "Đ_Criteria___ớ",
      "actionsTip": "Đ_Change the order of the rule and define the criteria when it is triggered_______________________ớ"
    }
  },
  "filterPage": {
    "submitHidden": "Đ_Submit attribute data for this field even when hidden_________________ớ?",
    "title": "Đ_Configure clause for the ${action} rule_____________ớ",
    "filterBuilder": "Đ_Set action on field when record matches ${any_or_all} of the following expressions__________________________ớ",
    "noFilterTip": "Đ_Using the tools below, define the statement for when the action is active_______________________ớ."
  }
});