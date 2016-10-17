define({
  "layersPage": {
    "title": "á_Select a template to create features____________Ó",
    "generalSettings": "á_General Settings______Ó",
    "layerSettings": "á_Layer Settings_____Ó",
    "editDescription": "á_Provide display text for the edit panel_____________Ó",
    "editDescriptionTip": "á_This text is displayed above the Template picker, leave blank for no text_______________________Ó.",
    "promptOnSave": "á_Prompt to save unsaved edits when form is closed or switched to the next record_________________________Ó.",
    "promptOnSaveTip": "á_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________Ó.",
    "promptOnDelete": "á_Require confirmation when deleting a record______________Ó.",
    "promptOnDeleteTip": "á_Display a prompt when the user clicks delete to confirm the aciton_____________________Ó.",
    "removeOnSave": "á_Remove feature from selection on save____________Ó.",
    "removeOnSaveTip": "á_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________Ó.",
    "useFilterEditor": "á_Use feature template filter_________Ó",
    "useFilterEditorTip": "á_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________Ó.",
    "layerSettingsTable": {
      "allowDelete": "á_Allow Delete_____Ó",
      "allowDeleteTip": "á_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________Ó",
      "edit": "á_Editable___Ó",
      "editTip": "á_Option to include the layer in the widget_____________Ó",
      "label": "á_Layer___Ó",
      "labelTip": "á_Name of the layer as defined in the map_____________Ó",
      "update": "á_Disable Geometry Editing________Ó",
      "updateTip": "á_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________Ó",
      "allowUpdateOnly": "á_Update Only____Ó",
      "allowUpdateOnlyTip": "á_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________Ó",
      "fields": "á_Fields___Ó",
      "fieldsTip": "á_Modify the fields to be edited and define Smart Attributes__________________Ó",
      "description": "á_Description____Ó",
      "descriptionTip": "á_Optionally enter text you want to display on top of the attribute page______________________Ó."
    },
    "editFieldError": "á_Field modifications and Smart attributes are not available to layers that are not editable____________________________Ó"
  },
  "editDescriptionPage": {
    "title": "á_Define attribute overview text for <b>${layername}</b>__________________Ó "
  },
  "fieldsPage": {
    "title": "á_Configure fields for <b>${layername}</b>_____________Ó",
    "description": "á_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________Ó.",
    "fieldsNotes": "á_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________Ó.",
    "fieldsSettingsTable": {
      "display": "á_Display___Ó",
      "displayTip": "á_Determine whether the field is not visible______________Ó",
      "edit": "á_Editable___Ó",
      "editTip": "á_Check on if the field is present in the attribute form_________________Ó",
      "fieldName": "á_Name__Ó",
      "fieldNameTip": "á_Name of the field defined in the database_____________Ó",
      "fieldAlias": "á_Alias___Ó",
      "fieldAliasTip": "á_Name of the field defined in the map____________Ó",
      "canPresetValue": "á_Preset___Ó",
      "canPresetValueTip": "á_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________Ó",
      "actions": "á_Actions___Ó",
      "actionsTip": "á_Change the order of the fields or set up Smart Attributes__________________Ó"
    },
    "smartAttSupport": "á_Smart Attributes are not supported on required database fields____________________Ó"
  },
  "actionPage": {
    "title": "á_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________Ó",
    "description": "á_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________Ó.",
    "actionsSettingsTable": {
      "rule": "á_Action___Ó",
      "ruleTip": "á_Action performed when the criteria is satsified_______________Ó",
      "expression": "á_Expression____Ó",
      "expressionTip": "á_The resulting expression in SQL format from the defined criteria____________________Ó",
      "actions": "á_Criteria___Ó",
      "actionsTip": "á_Change the order of the rule and define the criteria when it is triggered_______________________Ó"
    }
  },
  "filterPage": {
    "submitHidden": "á_Submit attribute data for this field even when hidden_________________Ó?",
    "title": "á_Configure clause for the ${action} rule_____________Ó",
    "filterBuilder": "á_Set action on field when record matches ${any_or_all} of the following expressions__________________________Ó",
    "noFilterTip": "á_Using the tools below, define the statement for when the action is active_______________________Ó."
  }
});