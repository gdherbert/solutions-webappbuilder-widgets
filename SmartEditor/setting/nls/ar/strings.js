define({
  "layersPage": {
    "title": "بيت_Select a template to create features____________لاحقة",
    "generalSettings": "بيت_General Settings______لاحقة",
    "layerSettings": "بيت_Layer Settings_____لاحقة",
    "editDescription": "بيت_Provide display text for the edit panel_____________لاحقة",
    "editDescriptionTip": "بيت_This text is displayed above the Template picker, leave blank for no text_______________________لاحقة.",
    "promptOnSave": "بيت_Prompt to save unsaved edits when form is closed or switched to the next record_________________________لاحقة.",
    "promptOnSaveTip": "بيت_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________لاحقة.",
    "promptOnDelete": "بيت_Require confirmation when deleting a record______________لاحقة.",
    "promptOnDeleteTip": "بيت_Display a prompt when the user clicks delete to confirm the aciton_____________________لاحقة.",
    "removeOnSave": "بيت_Remove feature from selection on save____________لاحقة.",
    "removeOnSaveTip": "بيت_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________لاحقة.",
    "useFilterEditor": "بيت_Use feature template filter_________لاحقة",
    "useFilterEditorTip": "بيت_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________لاحقة.",
    "layerSettingsTable": {
      "allowDelete": "بيت_Allow Delete_____لاحقة",
      "allowDeleteTip": "بيت_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________لاحقة",
      "edit": "بيت_Editable___لاحقة",
      "editTip": "بيت_Option to include the layer in the widget_____________لاحقة",
      "label": "بيت_Layer___لاحقة",
      "labelTip": "بيت_Name of the layer as defined in the map_____________لاحقة",
      "update": "بيت_Disable Geometry Editing________لاحقة",
      "updateTip": "بيت_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________لاحقة",
      "allowUpdateOnly": "بيت_Update Only____لاحقة",
      "allowUpdateOnlyTip": "بيت_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________لاحقة",
      "fields": "بيت_Fields___لاحقة",
      "fieldsTip": "بيت_Modify the fields to be edited and define Smart Attributes__________________لاحقة",
      "description": "بيت_Description____لاحقة",
      "descriptionTip": "بيت_Optionally enter text you want to display on top of the attribute page______________________لاحقة."
    },
    "editFieldError": "بيت_Field modifications and Smart attributes are not available to layers that are not editable____________________________لاحقة"
  },
  "editDescriptionPage": {
    "title": "بيت_Define attribute overview text for <b>${layername}</b>__________________لاحقة "
  },
  "fieldsPage": {
    "title": "بيت_Configure fields for <b>${layername}</b>_____________لاحقة",
    "description": "بيت_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________لاحقة.",
    "fieldsNotes": "بيت_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________لاحقة.",
    "fieldsSettingsTable": {
      "display": "بيت_Display___لاحقة",
      "displayTip": "بيت_Determine whether the field is not visible______________لاحقة",
      "edit": "بيت_Editable___لاحقة",
      "editTip": "بيت_Check on if the field is present in the attribute form_________________لاحقة",
      "fieldName": "بيت_Name__لاحقة",
      "fieldNameTip": "بيت_Name of the field defined in the database_____________لاحقة",
      "fieldAlias": "بيت_Alias___لاحقة",
      "fieldAliasTip": "بيت_Name of the field defined in the map____________لاحقة",
      "canPresetValue": "بيت_Preset___لاحقة",
      "canPresetValueTip": "بيت_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________لاحقة",
      "actions": "بيت_Actions___لاحقة",
      "actionsTip": "بيت_Change the order of the fields or set up Smart Attributes__________________لاحقة"
    },
    "smartAttSupport": "بيت_Smart Attributes are not supported on required database fields____________________لاحقة"
  },
  "actionPage": {
    "title": "بيت_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________لاحقة",
    "description": "بيت_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________لاحقة.",
    "actionsSettingsTable": {
      "rule": "بيت_Action___لاحقة",
      "ruleTip": "بيت_Action performed when the criteria is satsified_______________لاحقة",
      "expression": "بيت_Expression____لاحقة",
      "expressionTip": "بيت_The resulting expression in SQL format from the defined criteria____________________لاحقة",
      "actions": "بيت_Criteria___لاحقة",
      "actionsTip": "بيت_Change the order of the rule and define the criteria when it is triggered_______________________لاحقة"
    }
  },
  "filterPage": {
    "submitHidden": "بيت_Submit attribute data for this field even when hidden_________________لاحقة?",
    "title": "بيت_Configure clause for the ${action} rule_____________لاحقة",
    "filterBuilder": "بيت_Set action on field when record matches ${any_or_all} of the following expressions__________________________لاحقة",
    "noFilterTip": "بيت_Using the tools below, define the statement for when the action is active_______________________لاحقة."
  }
});