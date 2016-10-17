define({
  "layersPage": {
    "title": "é_Select a template to create features____________È",
    "generalSettings": "é_General Settings______È",
    "layerSettings": "é_Layer Settings_____È",
    "editDescription": "é_Provide display text for the edit panel_____________È",
    "editDescriptionTip": "é_This text is displayed above the Template picker, leave blank for no text_______________________È.",
    "promptOnSave": "é_Prompt to save unsaved edits when form is closed or switched to the next record_________________________È.",
    "promptOnSaveTip": "é_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________È.",
    "promptOnDelete": "é_Require confirmation when deleting a record______________È.",
    "promptOnDeleteTip": "é_Display a prompt when the user clicks delete to confirm the aciton_____________________È.",
    "removeOnSave": "é_Remove feature from selection on save____________È.",
    "removeOnSaveTip": "é_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________È.",
    "useFilterEditor": "é_Use feature template filter_________È",
    "useFilterEditorTip": "é_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________È.",
    "layerSettingsTable": {
      "allowDelete": "é_Allow Delete_____È",
      "allowDeleteTip": "é_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________È",
      "edit": "é_Editable___È",
      "editTip": "é_Option to include the layer in the widget_____________È",
      "label": "é_Layer___È",
      "labelTip": "é_Name of the layer as defined in the map_____________È",
      "update": "é_Disable Geometry Editing________È",
      "updateTip": "é_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________È",
      "allowUpdateOnly": "é_Update Only____È",
      "allowUpdateOnlyTip": "é_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________È",
      "fields": "é_Fields___È",
      "fieldsTip": "é_Modify the fields to be edited and define Smart Attributes__________________È",
      "description": "é_Description____È",
      "descriptionTip": "é_Optionally enter text you want to display on top of the attribute page______________________È."
    },
    "editFieldError": "é_Field modifications and Smart attributes are not available to layers that are not editable____________________________È"
  },
  "editDescriptionPage": {
    "title": "é_Define attribute overview text for <b>${layername}</b>__________________È "
  },
  "fieldsPage": {
    "title": "é_Configure fields for <b>${layername}</b>_____________È",
    "description": "é_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________È.",
    "fieldsNotes": "é_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________È.",
    "fieldsSettingsTable": {
      "display": "é_Display___È",
      "displayTip": "é_Determine whether the field is not visible______________È",
      "edit": "é_Editable___È",
      "editTip": "é_Check on if the field is present in the attribute form_________________È",
      "fieldName": "é_Name__È",
      "fieldNameTip": "é_Name of the field defined in the database_____________È",
      "fieldAlias": "é_Alias___È",
      "fieldAliasTip": "é_Name of the field defined in the map____________È",
      "canPresetValue": "é_Preset___È",
      "canPresetValueTip": "é_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________È",
      "actions": "é_Actions___È",
      "actionsTip": "é_Change the order of the fields or set up Smart Attributes__________________È"
    },
    "smartAttSupport": "é_Smart Attributes are not supported on required database fields____________________È"
  },
  "actionPage": {
    "title": "é_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________È",
    "description": "é_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________È.",
    "actionsSettingsTable": {
      "rule": "é_Action___È",
      "ruleTip": "é_Action performed when the criteria is satsified_______________È",
      "expression": "é_Expression____È",
      "expressionTip": "é_The resulting expression in SQL format from the defined criteria____________________È",
      "actions": "é_Criteria___È",
      "actionsTip": "é_Change the order of the rule and define the criteria when it is triggered_______________________È"
    }
  },
  "filterPage": {
    "submitHidden": "é_Submit attribute data for this field even when hidden_________________È?",
    "title": "é_Configure clause for the ${action} rule_____________È",
    "filterBuilder": "é_Set action on field when record matches ${any_or_all} of the following expressions__________________________È",
    "noFilterTip": "é_Using the tools below, define the statement for when the action is active_______________________È."
  }
});