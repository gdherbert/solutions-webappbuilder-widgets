define({
  "layersPage": {
    "title": "ı_Select a template to create features____________İ",
    "generalSettings": "ı_General Settings______İ",
    "layerSettings": "ı_Layer Settings_____İ",
    "editDescription": "ı_Provide display text for the edit panel_____________İ",
    "editDescriptionTip": "ı_This text is displayed above the Template picker, leave blank for no text_______________________İ.",
    "promptOnSave": "ı_Prompt to save unsaved edits when form is closed or switched to the next record_________________________İ.",
    "promptOnSaveTip": "ı_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________İ.",
    "promptOnDelete": "ı_Require confirmation when deleting a record______________İ.",
    "promptOnDeleteTip": "ı_Display a prompt when the user clicks delete to confirm the aciton_____________________İ.",
    "removeOnSave": "ı_Remove feature from selection on save____________İ.",
    "removeOnSaveTip": "ı_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________İ.",
    "useFilterEditor": "ı_Use feature template filter_________İ",
    "useFilterEditorTip": "ı_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________İ.",
    "layerSettingsTable": {
      "allowDelete": "ı_Allow Delete_____İ",
      "allowDeleteTip": "ı_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________İ",
      "edit": "ı_Editable___İ",
      "editTip": "ı_Option to include the layer in the widget_____________İ",
      "label": "ı_Layer___İ",
      "labelTip": "ı_Name of the layer as defined in the map_____________İ",
      "update": "ı_Disable Geometry Editing________İ",
      "updateTip": "ı_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________İ",
      "allowUpdateOnly": "ı_Update Only____İ",
      "allowUpdateOnlyTip": "ı_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________İ",
      "fields": "ı_Fields___İ",
      "fieldsTip": "ı_Modify the fields to be edited and define Smart Attributes__________________İ",
      "description": "ı_Description____İ",
      "descriptionTip": "ı_Optionally enter text you want to display on top of the attribute page______________________İ."
    },
    "editFieldError": "ı_Field modifications and Smart attributes are not available to layers that are not editable____________________________İ"
  },
  "editDescriptionPage": {
    "title": "ı_Define attribute overview text for <b>${layername}</b>__________________İ "
  },
  "fieldsPage": {
    "title": "ı_Configure fields for <b>${layername}</b>_____________İ",
    "description": "ı_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________İ.",
    "fieldsNotes": "ı_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________İ.",
    "fieldsSettingsTable": {
      "display": "ı_Display___İ",
      "displayTip": "ı_Determine whether the field is not visible______________İ",
      "edit": "ı_Editable___İ",
      "editTip": "ı_Check on if the field is present in the attribute form_________________İ",
      "fieldName": "ı_Name__İ",
      "fieldNameTip": "ı_Name of the field defined in the database_____________İ",
      "fieldAlias": "ı_Alias___İ",
      "fieldAliasTip": "ı_Name of the field defined in the map____________İ",
      "canPresetValue": "ı_Preset___İ",
      "canPresetValueTip": "ı_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________İ",
      "actions": "ı_Actions___İ",
      "actionsTip": "ı_Change the order of the fields or set up Smart Attributes__________________İ"
    },
    "smartAttSupport": "ı_Smart Attributes are not supported on required database fields____________________İ"
  },
  "actionPage": {
    "title": "ı_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________İ",
    "description": "ı_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________İ.",
    "actionsSettingsTable": {
      "rule": "ı_Action___İ",
      "ruleTip": "ı_Action performed when the criteria is satsified_______________İ",
      "expression": "ı_Expression____İ",
      "expressionTip": "ı_The resulting expression in SQL format from the defined criteria____________________İ",
      "actions": "ı_Criteria___İ",
      "actionsTip": "ı_Change the order of the rule and define the criteria when it is triggered_______________________İ"
    }
  },
  "filterPage": {
    "submitHidden": "ı_Submit attribute data for this field even when hidden_________________İ?",
    "title": "ı_Configure clause for the ${action} rule_____________İ",
    "filterBuilder": "ı_Set action on field when record matches ${any_or_all} of the following expressions__________________________İ",
    "noFilterTip": "ı_Using the tools below, define the statement for when the action is active_______________________İ."
  }
});