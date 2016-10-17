define({
  "layersPage": {
    "title": "한_Select a template to create features____________빠",
    "generalSettings": "한_General Settings______빠",
    "layerSettings": "한_Layer Settings_____빠",
    "editDescription": "한_Provide display text for the edit panel_____________빠",
    "editDescriptionTip": "한_This text is displayed above the Template picker, leave blank for no text_______________________빠.",
    "promptOnSave": "한_Prompt to save unsaved edits when form is closed or switched to the next record_________________________빠.",
    "promptOnSaveTip": "한_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________빠.",
    "promptOnDelete": "한_Require confirmation when deleting a record______________빠.",
    "promptOnDeleteTip": "한_Display a prompt when the user clicks delete to confirm the aciton_____________________빠.",
    "removeOnSave": "한_Remove feature from selection on save____________빠.",
    "removeOnSaveTip": "한_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________빠.",
    "useFilterEditor": "한_Use feature template filter_________빠",
    "useFilterEditorTip": "한_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________빠.",
    "layerSettingsTable": {
      "allowDelete": "한_Allow Delete_____빠",
      "allowDeleteTip": "한_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________빠",
      "edit": "한_Editable___빠",
      "editTip": "한_Option to include the layer in the widget_____________빠",
      "label": "한_Layer___빠",
      "labelTip": "한_Name of the layer as defined in the map_____________빠",
      "update": "한_Disable Geometry Editing________빠",
      "updateTip": "한_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________빠",
      "allowUpdateOnly": "한_Update Only____빠",
      "allowUpdateOnlyTip": "한_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________빠",
      "fields": "한_Fields___빠",
      "fieldsTip": "한_Modify the fields to be edited and define Smart Attributes__________________빠",
      "description": "한_Description____빠",
      "descriptionTip": "한_Optionally enter text you want to display on top of the attribute page______________________빠."
    },
    "editFieldError": "한_Field modifications and Smart attributes are not available to layers that are not editable____________________________빠"
  },
  "editDescriptionPage": {
    "title": "한_Define attribute overview text for <b>${layername}</b>__________________빠 "
  },
  "fieldsPage": {
    "title": "한_Configure fields for <b>${layername}</b>_____________빠",
    "description": "한_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________빠.",
    "fieldsNotes": "한_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________빠.",
    "fieldsSettingsTable": {
      "display": "한_Display___빠",
      "displayTip": "한_Determine whether the field is not visible______________빠",
      "edit": "한_Editable___빠",
      "editTip": "한_Check on if the field is present in the attribute form_________________빠",
      "fieldName": "한_Name__빠",
      "fieldNameTip": "한_Name of the field defined in the database_____________빠",
      "fieldAlias": "한_Alias___빠",
      "fieldAliasTip": "한_Name of the field defined in the map____________빠",
      "canPresetValue": "한_Preset___빠",
      "canPresetValueTip": "한_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________빠",
      "actions": "한_Actions___빠",
      "actionsTip": "한_Change the order of the fields or set up Smart Attributes__________________빠"
    },
    "smartAttSupport": "한_Smart Attributes are not supported on required database fields____________________빠"
  },
  "actionPage": {
    "title": "한_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________빠",
    "description": "한_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________빠.",
    "actionsSettingsTable": {
      "rule": "한_Action___빠",
      "ruleTip": "한_Action performed when the criteria is satsified_______________빠",
      "expression": "한_Expression____빠",
      "expressionTip": "한_The resulting expression in SQL format from the defined criteria____________________빠",
      "actions": "한_Criteria___빠",
      "actionsTip": "한_Change the order of the rule and define the criteria when it is triggered_______________________빠"
    }
  },
  "filterPage": {
    "submitHidden": "한_Submit attribute data for this field even when hidden_________________빠?",
    "title": "한_Configure clause for the ${action} rule_____________빠",
    "filterBuilder": "한_Set action on field when record matches ${any_or_all} of the following expressions__________________________빠",
    "noFilterTip": "한_Using the tools below, define the statement for when the action is active_______________________빠."
  }
});