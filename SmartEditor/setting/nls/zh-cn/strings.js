define({
  "layersPage": {
    "title": "试_Select a template to create features____________验",
    "generalSettings": "试_General Settings______验",
    "layerSettings": "试_Layer Settings_____验",
    "editDescription": "试_Provide display text for the edit panel_____________验",
    "editDescriptionTip": "试_This text is displayed above the Template picker, leave blank for no text_______________________验.",
    "promptOnSave": "试_Prompt to save unsaved edits when form is closed or switched to the next record_________________________验.",
    "promptOnSaveTip": "试_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________验.",
    "promptOnDelete": "试_Require confirmation when deleting a record______________验.",
    "promptOnDeleteTip": "试_Display a prompt when the user clicks delete to confirm the aciton_____________________验.",
    "removeOnSave": "试_Remove feature from selection on save____________验.",
    "removeOnSaveTip": "试_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________验.",
    "useFilterEditor": "试_Use feature template filter_________验",
    "useFilterEditorTip": "试_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________验.",
    "layerSettingsTable": {
      "allowDelete": "试_Allow Delete_____验",
      "allowDeleteTip": "试_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________验",
      "edit": "试_Editable___验",
      "editTip": "试_Option to include the layer in the widget_____________验",
      "label": "试_Layer___验",
      "labelTip": "试_Name of the layer as defined in the map_____________验",
      "update": "试_Disable Geometry Editing________验",
      "updateTip": "试_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________验",
      "allowUpdateOnly": "试_Update Only____验",
      "allowUpdateOnlyTip": "试_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________验",
      "fields": "试_Fields___验",
      "fieldsTip": "试_Modify the fields to be edited and define Smart Attributes__________________验",
      "description": "试_Description____验",
      "descriptionTip": "试_Optionally enter text you want to display on top of the attribute page______________________验."
    },
    "editFieldError": "试_Field modifications and Smart attributes are not available to layers that are not editable____________________________验"
  },
  "editDescriptionPage": {
    "title": "试_Define attribute overview text for <b>${layername}</b>__________________验 "
  },
  "fieldsPage": {
    "title": "试_Configure fields for <b>${layername}</b>_____________验",
    "description": "试_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________验.",
    "fieldsNotes": "试_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________验.",
    "fieldsSettingsTable": {
      "display": "试_Display___验",
      "displayTip": "试_Determine whether the field is not visible______________验",
      "edit": "试_Editable___验",
      "editTip": "试_Check on if the field is present in the attribute form_________________验",
      "fieldName": "试_Name__验",
      "fieldNameTip": "试_Name of the field defined in the database_____________验",
      "fieldAlias": "试_Alias___验",
      "fieldAliasTip": "试_Name of the field defined in the map____________验",
      "canPresetValue": "试_Preset___验",
      "canPresetValueTip": "试_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________验",
      "actions": "试_Actions___验",
      "actionsTip": "试_Change the order of the fields or set up Smart Attributes__________________验"
    },
    "smartAttSupport": "试_Smart Attributes are not supported on required database fields____________________验"
  },
  "actionPage": {
    "title": "试_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________验",
    "description": "试_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________验.",
    "actionsSettingsTable": {
      "rule": "试_Action___验",
      "ruleTip": "试_Action performed when the criteria is satsified_______________验",
      "expression": "试_Expression____验",
      "expressionTip": "试_The resulting expression in SQL format from the defined criteria____________________验",
      "actions": "试_Criteria___验",
      "actionsTip": "试_Change the order of the rule and define the criteria when it is triggered_______________________验"
    }
  },
  "filterPage": {
    "submitHidden": "试_Submit attribute data for this field even when hidden_________________验?",
    "title": "试_Configure clause for the ${action} rule_____________验",
    "filterBuilder": "试_Set action on field when record matches ${any_or_all} of the following expressions__________________________验",
    "noFilterTip": "试_Using the tools below, define the statement for when the action is active_______________________验."
  }
});