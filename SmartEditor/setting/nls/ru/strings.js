define({
  "layersPage": {
    "title": "Ж_Select a template to create features____________Я",
    "generalSettings": "Ж_General Settings______Я",
    "layerSettings": "Ж_Layer Settings_____Я",
    "editDescription": "Ж_Provide display text for the edit panel_____________Я",
    "editDescriptionTip": "Ж_This text is displayed above the Template picker, leave blank for no text_______________________Я.",
    "promptOnSave": "Ж_Prompt to save unsaved edits when form is closed or switched to the next record_________________________Я.",
    "promptOnSaveTip": "Ж_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________Я.",
    "promptOnDelete": "Ж_Require confirmation when deleting a record______________Я.",
    "promptOnDeleteTip": "Ж_Display a prompt when the user clicks delete to confirm the aciton_____________________Я.",
    "removeOnSave": "Ж_Remove feature from selection on save____________Я.",
    "removeOnSaveTip": "Ж_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________Я.",
    "useFilterEditor": "Ж_Use feature template filter_________Я",
    "useFilterEditorTip": "Ж_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________Я.",
    "layerSettingsTable": {
      "allowDelete": "Ж_Allow Delete_____Я",
      "allowDeleteTip": "Ж_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________Я",
      "edit": "Ж_Editable___Я",
      "editTip": "Ж_Option to include the layer in the widget_____________Я",
      "label": "Ж_Layer___Я",
      "labelTip": "Ж_Name of the layer as defined in the map_____________Я",
      "update": "Ж_Disable Geometry Editing________Я",
      "updateTip": "Ж_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________Я",
      "allowUpdateOnly": "Ж_Update Only____Я",
      "allowUpdateOnlyTip": "Ж_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________Я",
      "fields": "Ж_Fields___Я",
      "fieldsTip": "Ж_Modify the fields to be edited and define Smart Attributes__________________Я",
      "description": "Ж_Description____Я",
      "descriptionTip": "Ж_Optionally enter text you want to display on top of the attribute page______________________Я."
    },
    "editFieldError": "Ж_Field modifications and Smart attributes are not available to layers that are not editable____________________________Я"
  },
  "editDescriptionPage": {
    "title": "Ж_Define attribute overview text for <b>${layername}</b>__________________Я "
  },
  "fieldsPage": {
    "title": "Ж_Configure fields for <b>${layername}</b>_____________Я",
    "description": "Ж_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________Я.",
    "fieldsNotes": "Ж_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________Я.",
    "fieldsSettingsTable": {
      "display": "Ж_Display___Я",
      "displayTip": "Ж_Determine whether the field is not visible______________Я",
      "edit": "Ж_Editable___Я",
      "editTip": "Ж_Check on if the field is present in the attribute form_________________Я",
      "fieldName": "Ж_Name__Я",
      "fieldNameTip": "Ж_Name of the field defined in the database_____________Я",
      "fieldAlias": "Ж_Alias___Я",
      "fieldAliasTip": "Ж_Name of the field defined in the map____________Я",
      "canPresetValue": "Ж_Preset___Я",
      "canPresetValueTip": "Ж_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________Я",
      "actions": "Ж_Actions___Я",
      "actionsTip": "Ж_Change the order of the fields or set up Smart Attributes__________________Я"
    },
    "smartAttSupport": "Ж_Smart Attributes are not supported on required database fields____________________Я"
  },
  "actionPage": {
    "title": "Ж_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________Я",
    "description": "Ж_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________Я.",
    "actionsSettingsTable": {
      "rule": "Ж_Action___Я",
      "ruleTip": "Ж_Action performed when the criteria is satsified_______________Я",
      "expression": "Ж_Expression____Я",
      "expressionTip": "Ж_The resulting expression in SQL format from the defined criteria____________________Я",
      "actions": "Ж_Criteria___Я",
      "actionsTip": "Ж_Change the order of the rule and define the criteria when it is triggered_______________________Я"
    }
  },
  "filterPage": {
    "submitHidden": "Ж_Submit attribute data for this field even when hidden_________________Я?",
    "title": "Ж_Configure clause for the ${action} rule_____________Я",
    "filterBuilder": "Ж_Set action on field when record matches ${any_or_all} of the following expressions__________________________Я",
    "noFilterTip": "Ж_Using the tools below, define the statement for when the action is active_______________________Я."
  }
});