define({
  "layersPage": {
    "title": "ก้_Select a template to create features____________ษฺ",
    "generalSettings": "ก้_General Settings______ษฺ",
    "layerSettings": "ก้_Layer Settings_____ษฺ",
    "editDescription": "ก้_Provide display text for the edit panel_____________ษฺ",
    "editDescriptionTip": "ก้_This text is displayed above the Template picker, leave blank for no text_______________________ษฺ.",
    "promptOnSave": "ก้_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ษฺ.",
    "promptOnSaveTip": "ก้_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ษฺ.",
    "promptOnDelete": "ก้_Require confirmation when deleting a record______________ษฺ.",
    "promptOnDeleteTip": "ก้_Display a prompt when the user clicks delete to confirm the aciton_____________________ษฺ.",
    "removeOnSave": "ก้_Remove feature from selection on save____________ษฺ.",
    "removeOnSaveTip": "ก้_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ษฺ.",
    "useFilterEditor": "ก้_Use feature template filter_________ษฺ",
    "useFilterEditorTip": "ก้_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ษฺ.",
    "layerSettingsTable": {
      "allowDelete": "ก้_Allow Delete_____ษฺ",
      "allowDeleteTip": "ก้_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ษฺ",
      "edit": "ก้_Editable___ษฺ",
      "editTip": "ก้_Option to include the layer in the widget_____________ษฺ",
      "label": "ก้_Layer___ษฺ",
      "labelTip": "ก้_Name of the layer as defined in the map_____________ษฺ",
      "update": "ก้_Disable Geometry Editing________ษฺ",
      "updateTip": "ก้_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ษฺ",
      "allowUpdateOnly": "ก้_Update Only____ษฺ",
      "allowUpdateOnlyTip": "ก้_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ษฺ",
      "fields": "ก้_Fields___ษฺ",
      "fieldsTip": "ก้_Modify the fields to be edited and define Smart Attributes__________________ษฺ",
      "description": "ก้_Description____ษฺ",
      "descriptionTip": "ก้_Optionally enter text you want to display on top of the attribute page______________________ษฺ."
    },
    "editFieldError": "ก้_Field modifications and Smart attributes are not available to layers that are not editable____________________________ษฺ"
  },
  "editDescriptionPage": {
    "title": "ก้_Define attribute overview text for <b>${layername}</b>__________________ษฺ "
  },
  "fieldsPage": {
    "title": "ก้_Configure fields for <b>${layername}</b>_____________ษฺ",
    "description": "ก้_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ษฺ.",
    "fieldsNotes": "ก้_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ษฺ.",
    "fieldsSettingsTable": {
      "display": "ก้_Display___ษฺ",
      "displayTip": "ก้_Determine whether the field is not visible______________ษฺ",
      "edit": "ก้_Editable___ษฺ",
      "editTip": "ก้_Check on if the field is present in the attribute form_________________ษฺ",
      "fieldName": "ก้_Name__ษฺ",
      "fieldNameTip": "ก้_Name of the field defined in the database_____________ษฺ",
      "fieldAlias": "ก้_Alias___ษฺ",
      "fieldAliasTip": "ก้_Name of the field defined in the map____________ษฺ",
      "canPresetValue": "ก้_Preset___ษฺ",
      "canPresetValueTip": "ก้_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ษฺ",
      "actions": "ก้_Actions___ษฺ",
      "actionsTip": "ก้_Change the order of the fields or set up Smart Attributes__________________ษฺ"
    },
    "smartAttSupport": "ก้_Smart Attributes are not supported on required database fields____________________ษฺ"
  },
  "actionPage": {
    "title": "ก้_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ษฺ",
    "description": "ก้_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ษฺ.",
    "actionsSettingsTable": {
      "rule": "ก้_Action___ษฺ",
      "ruleTip": "ก้_Action performed when the criteria is satsified_______________ษฺ",
      "expression": "ก้_Expression____ษฺ",
      "expressionTip": "ก้_The resulting expression in SQL format from the defined criteria____________________ษฺ",
      "actions": "ก้_Criteria___ษฺ",
      "actionsTip": "ก้_Change the order of the rule and define the criteria when it is triggered_______________________ษฺ"
    }
  },
  "filterPage": {
    "submitHidden": "ก้_Submit attribute data for this field even when hidden_________________ษฺ?",
    "title": "ก้_Configure clause for the ${action} rule_____________ษฺ",
    "filterBuilder": "ก้_Set action on field when record matches ${any_or_all} of the following expressions__________________________ษฺ",
    "noFilterTip": "ก้_Using the tools below, define the statement for when the action is active_______________________ษฺ."
  }
});