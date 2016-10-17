define({
  "layersPage": {
    "title": "ä_Select a template to create features____________Ü",
    "generalSettings": "ä_General Settings______Ü",
    "layerSettings": "ä_Layer Settings_____Ü",
    "editDescription": "ä_Provide display text for the edit panel_____________Ü",
    "editDescriptionTip": "ä_This text is displayed above the Template picker, leave blank for no text_______________________Ü.",
    "promptOnSave": "ä_Prompt to save unsaved edits when form is closed or switched to the next record_________________________Ü.",
    "promptOnSaveTip": "ä_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________Ü.",
    "promptOnDelete": "ä_Require confirmation when deleting a record______________Ü.",
    "promptOnDeleteTip": "ä_Display a prompt when the user clicks delete to confirm the aciton_____________________Ü.",
    "removeOnSave": "ä_Remove feature from selection on save____________Ü.",
    "removeOnSaveTip": "ä_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________Ü.",
    "useFilterEditor": "ä_Use feature template filter_________Ü",
    "useFilterEditorTip": "ä_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________Ü.",
    "layerSettingsTable": {
      "allowDelete": "ä_Allow Delete_____Ü",
      "allowDeleteTip": "ä_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________Ü",
      "edit": "ä_Editable___Ü",
      "editTip": "ä_Option to include the layer in the widget_____________Ü",
      "label": "ä_Layer___Ü",
      "labelTip": "ä_Name of the layer as defined in the map_____________Ü",
      "update": "ä_Disable Geometry Editing________Ü",
      "updateTip": "ä_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________Ü",
      "allowUpdateOnly": "ä_Update Only____Ü",
      "allowUpdateOnlyTip": "ä_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________Ü",
      "fields": "ä_Fields___Ü",
      "fieldsTip": "ä_Modify the fields to be edited and define Smart Attributes__________________Ü",
      "description": "ä_Description____Ü",
      "descriptionTip": "ä_Optionally enter text you want to display on top of the attribute page______________________Ü."
    },
    "editFieldError": "ä_Field modifications and Smart attributes are not available to layers that are not editable____________________________Ü"
  },
  "editDescriptionPage": {
    "title": "ä_Define attribute overview text for <b>${layername}</b>__________________Ü "
  },
  "fieldsPage": {
    "title": "ä_Configure fields for <b>${layername}</b>_____________Ü",
    "description": "ä_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________Ü.",
    "fieldsNotes": "ä_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________Ü.",
    "fieldsSettingsTable": {
      "display": "ä_Display___Ü",
      "displayTip": "ä_Determine whether the field is not visible______________Ü",
      "edit": "ä_Editable___Ü",
      "editTip": "ä_Check on if the field is present in the attribute form_________________Ü",
      "fieldName": "ä_Name__Ü",
      "fieldNameTip": "ä_Name of the field defined in the database_____________Ü",
      "fieldAlias": "ä_Alias___Ü",
      "fieldAliasTip": "ä_Name of the field defined in the map____________Ü",
      "canPresetValue": "ä_Preset___Ü",
      "canPresetValueTip": "ä_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________Ü",
      "actions": "ä_Actions___Ü",
      "actionsTip": "ä_Change the order of the fields or set up Smart Attributes__________________Ü"
    },
    "smartAttSupport": "ä_Smart Attributes are not supported on required database fields____________________Ü"
  },
  "actionPage": {
    "title": "ä_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________Ü",
    "description": "ä_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________Ü.",
    "actionsSettingsTable": {
      "rule": "ä_Action___Ü",
      "ruleTip": "ä_Action performed when the criteria is satsified_______________Ü",
      "expression": "ä_Expression____Ü",
      "expressionTip": "ä_The resulting expression in SQL format from the defined criteria____________________Ü",
      "actions": "ä_Criteria___Ü",
      "actionsTip": "ä_Change the order of the rule and define the criteria when it is triggered_______________________Ü"
    }
  },
  "filterPage": {
    "submitHidden": "ä_Submit attribute data for this field even when hidden_________________Ü?",
    "title": "ä_Configure clause for the ${action} rule_____________Ü",
    "filterBuilder": "ä_Set action on field when record matches ${any_or_all} of the following expressions__________________________Ü",
    "noFilterTip": "ä_Using the tools below, define the statement for when the action is active_______________________Ü."
  }
});