define({
  "layersPage": {
    "title": "ø_Select a template to create features____________å",
    "generalSettings": "ø_General Settings______å",
    "layerSettings": "ø_Layer Settings_____å",
    "editDescription": "ø_Provide display text for the edit panel_____________å",
    "editDescriptionTip": "ø_This text is displayed above the Template picker, leave blank for no text_______________________å.",
    "promptOnSave": "ø_Prompt to save unsaved edits when form is closed or switched to the next record_________________________å.",
    "promptOnSaveTip": "ø_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________å.",
    "promptOnDelete": "ø_Require confirmation when deleting a record______________å.",
    "promptOnDeleteTip": "ø_Display a prompt when the user clicks delete to confirm the aciton_____________________å.",
    "removeOnSave": "ø_Remove feature from selection on save____________å.",
    "removeOnSaveTip": "ø_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________å.",
    "useFilterEditor": "ø_Use feature template filter_________å",
    "useFilterEditorTip": "ø_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________å.",
    "layerSettingsTable": {
      "allowDelete": "ø_Allow Delete_____å",
      "allowDeleteTip": "ø_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________å",
      "edit": "ø_Editable___å",
      "editTip": "ø_Option to include the layer in the widget_____________å",
      "label": "ø_Layer___å",
      "labelTip": "ø_Name of the layer as defined in the map_____________å",
      "update": "ø_Disable Geometry Editing________å",
      "updateTip": "ø_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________å",
      "allowUpdateOnly": "ø_Update Only____å",
      "allowUpdateOnlyTip": "ø_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________å",
      "fields": "ø_Fields___å",
      "fieldsTip": "ø_Modify the fields to be edited and define Smart Attributes__________________å",
      "description": "ø_Description____å",
      "descriptionTip": "ø_Optionally enter text you want to display on top of the attribute page______________________å."
    },
    "editFieldError": "ø_Field modifications and Smart attributes are not available to layers that are not editable____________________________å"
  },
  "editDescriptionPage": {
    "title": "ø_Define attribute overview text for <b>${layername}</b>__________________å "
  },
  "fieldsPage": {
    "title": "ø_Configure fields for <b>${layername}</b>_____________å",
    "description": "ø_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________å.",
    "fieldsNotes": "ø_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________å.",
    "fieldsSettingsTable": {
      "display": "ø_Display___å",
      "displayTip": "ø_Determine whether the field is not visible______________å",
      "edit": "ø_Editable___å",
      "editTip": "ø_Check on if the field is present in the attribute form_________________å",
      "fieldName": "ø_Name__å",
      "fieldNameTip": "ø_Name of the field defined in the database_____________å",
      "fieldAlias": "ø_Alias___å",
      "fieldAliasTip": "ø_Name of the field defined in the map____________å",
      "canPresetValue": "ø_Preset___å",
      "canPresetValueTip": "ø_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________å",
      "actions": "ø_Actions___å",
      "actionsTip": "ø_Change the order of the fields or set up Smart Attributes__________________å"
    },
    "smartAttSupport": "ø_Smart Attributes are not supported on required database fields____________________å"
  },
  "actionPage": {
    "title": "ø_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________å",
    "description": "ø_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________å.",
    "actionsSettingsTable": {
      "rule": "ø_Action___å",
      "ruleTip": "ø_Action performed when the criteria is satsified_______________å",
      "expression": "ø_Expression____å",
      "expressionTip": "ø_The resulting expression in SQL format from the defined criteria____________________å",
      "actions": "ø_Criteria___å",
      "actionsTip": "ø_Change the order of the rule and define the criteria when it is triggered_______________________å"
    }
  },
  "filterPage": {
    "submitHidden": "ø_Submit attribute data for this field even when hidden_________________å?",
    "title": "ø_Configure clause for the ${action} rule_____________å",
    "filterBuilder": "ø_Set action on field when record matches ${any_or_all} of the following expressions__________________________å",
    "noFilterTip": "ø_Using the tools below, define the statement for when the action is active_______________________å."
  }
});