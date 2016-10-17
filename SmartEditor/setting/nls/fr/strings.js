define({
  "layersPage": {
    "title": "æ_Select a template to create features____________Â",
    "generalSettings": "æ_General Settings______Â",
    "layerSettings": "æ_Layer Settings_____Â",
    "editDescription": "æ_Provide display text for the edit panel_____________Â",
    "editDescriptionTip": "æ_This text is displayed above the Template picker, leave blank for no text_______________________Â.",
    "promptOnSave": "æ_Prompt to save unsaved edits when form is closed or switched to the next record_________________________Â.",
    "promptOnSaveTip": "æ_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________Â.",
    "promptOnDelete": "æ_Require confirmation when deleting a record______________Â.",
    "promptOnDeleteTip": "æ_Display a prompt when the user clicks delete to confirm the aciton_____________________Â.",
    "removeOnSave": "æ_Remove feature from selection on save____________Â.",
    "removeOnSaveTip": "æ_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________Â.",
    "useFilterEditor": "æ_Use feature template filter_________Â",
    "useFilterEditorTip": "æ_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________Â.",
    "layerSettingsTable": {
      "allowDelete": "æ_Allow Delete_____Â",
      "allowDeleteTip": "æ_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________Â",
      "edit": "æ_Editable___Â",
      "editTip": "æ_Option to include the layer in the widget_____________Â",
      "label": "æ_Layer___Â",
      "labelTip": "æ_Name of the layer as defined in the map_____________Â",
      "update": "æ_Disable Geometry Editing________Â",
      "updateTip": "æ_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________Â",
      "allowUpdateOnly": "æ_Update Only____Â",
      "allowUpdateOnlyTip": "æ_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________Â",
      "fields": "æ_Fields___Â",
      "fieldsTip": "æ_Modify the fields to be edited and define Smart Attributes__________________Â",
      "description": "æ_Description____Â",
      "descriptionTip": "æ_Optionally enter text you want to display on top of the attribute page______________________Â."
    },
    "editFieldError": "æ_Field modifications and Smart attributes are not available to layers that are not editable____________________________Â"
  },
  "editDescriptionPage": {
    "title": "æ_Define attribute overview text for <b>${layername}</b>__________________Â "
  },
  "fieldsPage": {
    "title": "æ_Configure fields for <b>${layername}</b>_____________Â",
    "description": "æ_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________Â.",
    "fieldsNotes": "æ_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________Â.",
    "fieldsSettingsTable": {
      "display": "æ_Display___Â",
      "displayTip": "æ_Determine whether the field is not visible______________Â",
      "edit": "æ_Editable___Â",
      "editTip": "æ_Check on if the field is present in the attribute form_________________Â",
      "fieldName": "æ_Name__Â",
      "fieldNameTip": "æ_Name of the field defined in the database_____________Â",
      "fieldAlias": "æ_Alias___Â",
      "fieldAliasTip": "æ_Name of the field defined in the map____________Â",
      "canPresetValue": "æ_Preset___Â",
      "canPresetValueTip": "æ_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________Â",
      "actions": "æ_Actions___Â",
      "actionsTip": "æ_Change the order of the fields or set up Smart Attributes__________________Â"
    },
    "smartAttSupport": "æ_Smart Attributes are not supported on required database fields____________________Â"
  },
  "actionPage": {
    "title": "æ_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________Â",
    "description": "æ_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________Â.",
    "actionsSettingsTable": {
      "rule": "æ_Action___Â",
      "ruleTip": "æ_Action performed when the criteria is satsified_______________Â",
      "expression": "æ_Expression____Â",
      "expressionTip": "æ_The resulting expression in SQL format from the defined criteria____________________Â",
      "actions": "æ_Criteria___Â",
      "actionsTip": "æ_Change the order of the rule and define the criteria when it is triggered_______________________Â"
    }
  },
  "filterPage": {
    "submitHidden": "æ_Submit attribute data for this field even when hidden_________________Â?",
    "title": "æ_Configure clause for the ${action} rule_____________Â",
    "filterBuilder": "æ_Set action on field when record matches ${any_or_all} of the following expressions__________________________Â",
    "noFilterTip": "æ_Using the tools below, define the statement for when the action is active_______________________Â."
  }
});