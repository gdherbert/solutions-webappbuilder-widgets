define({
  "layersPage": {
    "title": "ã_Select a template to create features____________Ç",
    "generalSettings": "ã_General Settings______Ç",
    "layerSettings": "ã_Layer Settings_____Ç",
    "editDescription": "ã_Provide display text for the edit panel_____________Ç",
    "editDescriptionTip": "ã_This text is displayed above the Template picker, leave blank for no text_______________________Ç.",
    "promptOnSave": "ã_Prompt to save unsaved edits when form is closed or switched to the next record_________________________Ç.",
    "promptOnSaveTip": "ã_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________Ç.",
    "promptOnDelete": "ã_Require confirmation when deleting a record______________Ç.",
    "promptOnDeleteTip": "ã_Display a prompt when the user clicks delete to confirm the aciton_____________________Ç.",
    "removeOnSave": "ã_Remove feature from selection on save____________Ç.",
    "removeOnSaveTip": "ã_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________Ç.",
    "useFilterEditor": "ã_Use feature template filter_________Ç",
    "useFilterEditorTip": "ã_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________Ç.",
    "layerSettingsTable": {
      "allowDelete": "ã_Allow Delete_____Ç",
      "allowDeleteTip": "ã_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________Ç",
      "edit": "ã_Editable___Ç",
      "editTip": "ã_Option to include the layer in the widget_____________Ç",
      "label": "ã_Layer___Ç",
      "labelTip": "ã_Name of the layer as defined in the map_____________Ç",
      "update": "ã_Disable Geometry Editing________Ç",
      "updateTip": "ã_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________Ç",
      "allowUpdateOnly": "ã_Update Only____Ç",
      "allowUpdateOnlyTip": "ã_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________Ç",
      "fields": "ã_Fields___Ç",
      "fieldsTip": "ã_Modify the fields to be edited and define Smart Attributes__________________Ç",
      "description": "ã_Description____Ç",
      "descriptionTip": "ã_Optionally enter text you want to display on top of the attribute page______________________Ç."
    },
    "editFieldError": "ã_Field modifications and Smart attributes are not available to layers that are not editable____________________________Ç"
  },
  "editDescriptionPage": {
    "title": "ã_Define attribute overview text for <b>${layername}</b>__________________Ç "
  },
  "fieldsPage": {
    "title": "ã_Configure fields for <b>${layername}</b>_____________Ç",
    "description": "ã_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________Ç.",
    "fieldsNotes": "ã_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________Ç.",
    "fieldsSettingsTable": {
      "display": "ã_Display___Ç",
      "displayTip": "ã_Determine whether the field is not visible______________Ç",
      "edit": "ã_Editable___Ç",
      "editTip": "ã_Check on if the field is present in the attribute form_________________Ç",
      "fieldName": "ã_Name__Ç",
      "fieldNameTip": "ã_Name of the field defined in the database_____________Ç",
      "fieldAlias": "ã_Alias___Ç",
      "fieldAliasTip": "ã_Name of the field defined in the map____________Ç",
      "canPresetValue": "ã_Preset___Ç",
      "canPresetValueTip": "ã_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________Ç",
      "actions": "ã_Actions___Ç",
      "actionsTip": "ã_Change the order of the fields or set up Smart Attributes__________________Ç"
    },
    "smartAttSupport": "ã_Smart Attributes are not supported on required database fields____________________Ç"
  },
  "actionPage": {
    "title": "ã_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________Ç",
    "description": "ã_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________Ç.",
    "actionsSettingsTable": {
      "rule": "ã_Action___Ç",
      "ruleTip": "ã_Action performed when the criteria is satsified_______________Ç",
      "expression": "ã_Expression____Ç",
      "expressionTip": "ã_The resulting expression in SQL format from the defined criteria____________________Ç",
      "actions": "ã_Criteria___Ç",
      "actionsTip": "ã_Change the order of the rule and define the criteria when it is triggered_______________________Ç"
    }
  },
  "filterPage": {
    "submitHidden": "ã_Submit attribute data for this field even when hidden_________________Ç?",
    "title": "ã_Configure clause for the ${action} rule_____________Ç",
    "filterBuilder": "ã_Set action on field when record matches ${any_or_all} of the following expressions__________________________Ç",
    "noFilterTip": "ã_Using the tools below, define the statement for when the action is active_______________________Ç."
  }
});